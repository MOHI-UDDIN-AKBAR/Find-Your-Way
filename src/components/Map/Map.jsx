import React from "react";
import GoogleMapReact from "google-map-react";
const ForMobile = () => {
  return (
    <>
      <div className="forMobile">
        <span>
          <i className="fa-solid fa-location-dot"></i>
        </span>
      </div>
    </>
  );
};
const ForDesktop = ({ place }) => {
  const { name, photo, rating } = place;
  return (
    <>
      <div className="forDesktop" key={new Date().getTime().toString()}>
        <span>{name}</span>
        <img
          src={
            photo
              ? photo.images.large.url
              : "https://images.pexels.com/photos/949067/pexels-photo-949067.jpeg?auto=compress&cs=tinysrgb&w=300"
          }
          alt={name ? name : "food"}
        />
        <div className="rating">
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>{rating}</span>
        </div>
      </div>
    </>
  );
};
const Map = ({
  setCoordinates,
  coordinates,
  setBounds,
  places,
  setChildClicked,
}) => {
  return (
    <>
      <div className="map">
        <GoogleMapReact
          className="map"
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={10}
          margin={[50, 50, 50, 50]}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ sw: e.bounds.ne, ne: e.bounds.sw });
          }}
          onChildClick={(child) => setChildClicked(child)}
        >
          {places?.map((place, index) => {
            return (
              <div
                className="child"
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={index}
              >
                {window.innerWidth > 700 ? (
                  <ForDesktop place={place} />
                ) : (
                  <ForMobile />
                )}
              </div>
            );
          })}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
