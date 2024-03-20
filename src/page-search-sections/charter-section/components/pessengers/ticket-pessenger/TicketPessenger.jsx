import React from "react";
import "./TicketPessenger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../../../../../Context/context";

export default function TicketPessenger() {
  const { passengerType, increase, decrease } = useGlobalContext();

  const totalPassengers = passengerType.reduce(
    (total, category) => total + category.amount,
    0
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
          <span className="passenger-count">{totalPassengers + " "}</span>
          Passenger &nbsp;
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down" />
        </label>
        <div className="section-dropdown">
          {passengerType.map((category) => (
            <div className="passenger-category" key={category.id}>
              <div className="passenger-category-wrapper">
                <span>{category.name}</span>
                <span className="age-range">{category.allow}</span>
              </div>
              <div className="counter">
                <button
                  onClick={() => decrease(category.id)}
                  className={category.amount === 0 ? "disabled" : ""}
                  disabled={category.amount === 0}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{category.amount}</span>
                <button onClick={() => increase(category.id)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
