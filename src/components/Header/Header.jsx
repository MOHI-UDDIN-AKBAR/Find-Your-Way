import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
const Header = ({ setCoordinates }) => {
  const [name, setName] = useState("");
  const [autoComplete, setAutoComplete] = useState(null);
  const onLoad = (autoC) => setAutoComplete(autoC);
  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };
  return (
    <div className="header">
      <div className="logo">
        <h2>Find Your Way</h2>
      </div>

      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div className="searchSection">
          <h3>Explore More Places</h3>
          <div className="searchArea">
            <span>
              <i className="fa-solid fa-magnifying-glass-location"></i>
            </span>
            <input
              type="text"
              placeholder="Search..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </Autocomplete>
    </div>
  );
};

export default Header;
