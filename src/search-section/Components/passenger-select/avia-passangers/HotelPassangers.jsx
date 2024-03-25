import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../../../../Context/context";
import SelectChild from "../Components/SelectChild";

export default function PassengerCounter() {
  const { passengerType, increase, decrease } = useGlobalContext();

  const adultCategory = passengerType.find(
    (category) => category.name === "adult"
  );

  return (
    <div className="dropdown-pessager">
      <div className="sec-center">
        <input
          className="dropdown"
          type="checkbox"
          id="dropdown"
          name="dropdown"
        />
        <label className="for-dropdown" htmlFor="dropdown">
          {adultCategory.amount + " "}
          Passenger &nbsp;
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down" />
        </label>
        <div className="section-dropdown">
          {adultCategory && (
            <div className="passenger-category" key={adultCategory.id}>
              <div className="passenger-category-wrapper">
                <span>{adultCategory.name}</span>
                <span className="age-range">{adultCategory.allow}</span>
              </div>
              <div className="counter">
                <button
                  onClick={() => decrease(adultCategory.id)}
                  className={adultCategory.amount === 0 ? "disabled" : ""}
                  disabled={adultCategory.amount === 0}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{adultCategory.amount}</span>
                <button onClick={() => increase(adultCategory.id)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          )}
          <SelectChild />
        </div>
      </div>
    </div>
  );
}
