import React from "react";
import "./AviaPassangers.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import SelectAviaClassName from "../Components/SelectAviaClassName";
import { useGlobalContext } from "../../../../Context/context";

export default function AviaPassenger() {
  const { passengerType, increase, decrease, setAllPassengers } =
    useGlobalContext();

  const totalPassengers = passengerType.reduce(
    (total, category) => total + category.amount,
    0
  );

  React.useEffect(() => {
    setAllPassengers(totalPassengers);
  }, [totalPassengers]);

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
          {totalPassengers + " "}
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
          <SelectAviaClassName />
        </div>
      </div>
    </div>
  );
}
