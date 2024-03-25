import React from "react";
import { useGlobalContext } from "../../../Context/context";
import "./InputsScss.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

export default function TourInputs() {
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
  } = useGlobalContext();

  return (
    <div className="avia__inputs">
      <div className="avia__inputs-wrapper">
        <input
          type="text"
          value={departurePlace}
          onChange={departureSearch}
          className="avia__input"
          placeholder="Directions"
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
                <div className="tours__recommendation">
                  <FontAwesomeIcon
                    icon={faPlaneDeparture}
                    className="location__dot"
                  />
                  <p>{item.depart_place}</p>
                </div>
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
        <div className="recommend__wrapper">
          <ul
            style={{ display: typingArrival ? "block" : "none" }}
            className="recommend__list"
          >
            {filteredFlightsArrival.slice(0, 5).map((item, index) => (
              <li
                key={index}
                onClick={() => handleArrivalLiClick(item.arrive_place)}
              >
                <div className="tours__recommendation">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="location__dot"
                  />

                  <p>{item.arrive_place}</p>
                </div>
                <p>{item.arrive_place_acr}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
