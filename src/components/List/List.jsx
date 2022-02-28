import React, { createRef, useEffect, useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, isLoading, setType, setRating, childClicked }) => {
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);
  return (
    <>
      <div className="list">
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            <div className="firstPart">
              <h1>Food & Dining around you</h1>
              <span>Type</span>
              <div className="type">
                <select
                  name="category"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="restaurants">Restaurants</option>
                  <option value="hotels">Hotels</option>
                  <option value="attractions">Attractions</option>
                </select>
                <select
                  name="rating"
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="0">All</option>
                  <option value="3">Above 3.0</option>
                  <option value="4">above 4.0</option>
                  <option value="4.5">above 4.5</option>
                </select>
              </div>
            </div>
            <div className="secondPart">
              {isLoading
                ? "Loading"
                : places?.map((place, index) => {
                    return (
                      <div key={index} ref={elRefs[index]}>
                        <PlaceDetails
                          place={place}
                          index={index}
                          selected={Number(childClicked) === index}
                          refProp={elRefs[index]}
                        />
                        ;
                      </div>
                    );
                  })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default List;
