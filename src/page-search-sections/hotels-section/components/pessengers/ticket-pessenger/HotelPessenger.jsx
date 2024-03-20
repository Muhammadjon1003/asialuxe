import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../../../../../Context/context";
import HotelAgeSelect from "../pessenger-select/HotelAgeSelect";

export default function HotelPessenger() {
  const { passengerType, increase, decrease } = useGlobalContext();

  const adultPassenger = passengerType.find(
    (category) => category.name === "adult"
  );

  return (
    <div>
      <div className="sec-center">
        <input
          className="dropdown"
          type="checkbox"
          id="dropdown"
          name="dropdown"
        />
        <label className="for-dropdown" htmlFor="dropdown">
          <span className="passenger-count">{adultPassenger.amount + " "}</span>
          Passenger &nbsp;
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down" />
        </label>
        <div className="section-dropdown">
          <div className="passenger-category" key={adultPassenger.id}>
            <div className="passenger-category-wrapper">
              <span>{adultPassenger.name}</span>
              <span className="age-range">{adultPassenger.allow}</span>
            </div>
            <div className="counter">
              <button
                onClick={() => decrease(adultPassenger.id)}
                className={adultPassenger.amount === 1 ? "disabled" : ""}
                disabled={adultPassenger.amount === 1}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span>{adultPassenger.amount}</span>
              <button
                onClick={() => increase(adultPassenger.id)}
                className={adultPassenger.amount === 10 ? "disabled" : ""}
                disabled={adultPassenger.amount === 10}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <HotelAgeSelect />
        </div>
      </div>
    </div>
  );
}
