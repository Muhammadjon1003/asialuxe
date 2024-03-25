import React, { useState } from "react";
import { useGlobalContext } from "../../../Context/context";
import "./InputsScss.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function AviaInputs() {
  const {
    arrivalPlace,
    handleArrivalLiClick,
    typingArrival,
    filteredHotelsArrival,
    arrivalSearch,
    itemSelected,
    setItemSelected,
  } = useGlobalContext();

  const handleItemClick = (country) => {
    handleArrivalLiClick(country);
    setItemSelected(true);
  };

  return (
    <div className="avia__inputs">
      <div className="avia__inputs-wrapper ">
        <input
          type="text"
          value={arrivalPlace}
          onChange={arrivalSearch}
          className={`avia__input hotel__input ${
            itemSelected ? "selected" : ""
          }`}
          placeholder="Directions"
        />
        <div className="recommend__wrapper">
          <span className="span__indicate"></span>

          <ul
            style={{ display: typingArrival ? "block" : "none" }}
            className="recommend__list recommended__list-hotel"
          >
            {filteredHotelsArrival.slice(0, 5).map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item.country)}>
                <div className="hotel__recommend-list">
                  <div>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="location__dot"
                    />
                  </div>
                  <div>
                    <p className="hotel__counrty">{item.country}</p>
                    <p className="hotel__title">{item.title}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
