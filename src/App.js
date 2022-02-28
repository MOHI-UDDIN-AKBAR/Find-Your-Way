import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
// import googleMapReact from "google-map-react";
import { getDataFromApi } from "./components/fetching/fatching";
const App = () => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("0");
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      getDataFromApi(type, bounds).then((data) => {
        // setIsLoading(true);
        const modifyData = data?.filter((place) => {
          return place.name != "" && place.rating > rating;
        });
        setIsLoading(false);
        setPlaces(modifyData);
      });
    }
    console.log({ childClicked });
  }, [isLoading, type, rating, bounds, childClicked]);
  return (
    <>
      <div className="findYourWay">
        <Header setCoordinates={setCoordinates} />
        <div className="mainSection">
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
            places={places}
            setChildClicked={setChildClicked}
          />
          <List
            places={places}
            isLoading={isLoading}
            setType={setType}
            setRating={setRating}
            childClicked={childClicked}
          />
        </div>
      </div>
    </>
  );
};

export default App;
