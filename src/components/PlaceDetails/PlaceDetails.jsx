import React, { useEffect, useState } from "react";

const PlaceDetails = ({ place, index, selected, refProp }) => {
  const {
    photo,
    name,
    price_level,
    ranking,
    awards,
    cuisine,
    address,
    phone,
    web_url,
    rating,
    website,
  } = place;
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <>
      <div className="placeDetails" key={index}>
        <div className="image">
          <img
            src={
              photo
                ? photo.images.large.url
                : "https://images.pexels.com/photos/949067/pexels-photo-949067.jpeg?auto=compress&cs=tinysrgb&w=300"
            }
            alt={name ? name : "food"}
          />
        </div>
        <div className="details">
          <div className="name">
            <span>{name ? name : "Zahir Kebab"}</span>
          </div>
          <div className="info">
            <div className="rating">
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <span>{rating ? rating : "3"}</span>
          </div>

          <div className="info">
            <span>Price</span>
            <span>{price_level ? price_level : "$$_$$$"}</span>
          </div>
          <div className="info">
            <span>Ranking</span>
            <span>{ranking ? ranking : "#3 of 343 Restaurants"}</span>
          </div>
          <div className="info">
            {awards?.map((award, index) => {
              const { award_type, year } = award;
              return (
                <>
                  <div className="award" key={index}>
                    <span>
                      <i className="fa-solid fa-award"></i>
                    </span>
                    <span>
                      {award_type} {year}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
          <div className="ingredients">
            {cuisine?.map((each, index) => {
              const { name } = each;
              return <span key={index}>{name}</span>;
            })}
          </div>
          <div className="info">
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <span>{address ? address : ""}</span>
          </div>
          <div className="info">
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            <span>{phone ? phone : ""}</span>
          </div>
          <div className="info">
            <a href={web_url}>
              <h4>TRIP ADVISOR</h4>
            </a>
            <a href={website}>
              <h4>WEBSITE</h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceDetails;
