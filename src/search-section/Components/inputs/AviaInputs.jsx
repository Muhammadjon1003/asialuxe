import React from "react";
import { useGlobalContext } from "../../../Context/context";
import "./InputsScss.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

export default function AviaInputs() {
  const {
    departurePlace,
    arrivalPlace,
    handleArrivalLiClick,
    handleDepartureLiClick,
    typingDeparture,
    typingArrival,
    filteredFlightsArrival,
    filteredFlightsDeparture,
    departureSearch,
    arrivalSearch,
    location,
  } = useGlobalContext();

  return (
    <div className="avia__inputs">
      <div className="avia__inputs-wrapper">
        <input
          type="text"
          value={departurePlace}
          onChange={departureSearch}
          className="avia__input"
          placeholder={
            location.pathname === "/charters" ? "Where" : "Directions"
          }
        />
        <FontAwesomeIcon icon={faPlaneDeparture} className="input__plane" />
        <img
          src="https://asialuxe.uz/assets/change_reverse-4d3b499d.svg"
          alt="directions img"
          className="directions__image"
        />

        <div className="recommennd__wrapper">
          <ul
            style={{ display: typingDeparture ? "block" : "none" }}
            className="recommend__start-list"
          >
            {filteredFlightsDeparture.slice(0, 5).map((item, index) => (
              <li
                key={index}
                onClick={() => handleDepartureLiClick(item.depart_place)}
              >
                <p>{item.depart_place}</p>
                <p>{item.depart_place_acr}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="avia__inputs-wrapper">
        <input
          type="text"
          value={arrivalPlace}
          onChange={arrivalSearch}
          className="avia__input end__input"
          placeholder="Directions"
        />
        <FontAwesomeIcon icon={faPlaneArrival} className="input__plane" />
        <div className="recommend__wrapper">
          <span className="span__indicate"></span>

          <ul
            style={{ display: typingArrival ? "block" : "none" }}
            className="recommend__list"
          >
            {filteredFlightsArrival.slice(0, 5).map((item, index) => (
              <li
                key={index}
                onClick={() => handleArrivalLiClick(item.arrive_place)}
              >
                <p>{item.arrive_place}</p>
                <p>{item.arrive_place_acr}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
