import React, { useState } from "react";
import AviaInputs from "../Components/inputs/AviaInputs";
import CustomDatePicker from "../Components/calendar/Calendar";
import { useGlobalContext } from "../../Context/context";
import "./AviaPageSearch.scss";
import AviaPassenger from "../Components/passenger-select/avia-passangers/AviaPassangers";
import DoubleDatePicker from "../Components/calendar/DoubleCalendar";

export default function AviaPageSearch() {
  const { startDate, endDate, setEndDate, setStartDate, handleButtonClick } =
    useGlobalContext();
  const [selectedOption, setSelectedOption] = useState("oneWay");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "oneWay") {
      setStartDate("");
    }
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <section className="search__section">
      <div className="container">
        <div className="search__section-wrapper">
          <div className="search__section-radio">
            <label htmlFor="oneWay">
              <input
                type="radio"
                name="flightType"
                id="oneWay"
                value="oneWay"
                checked={selectedOption === "oneWay"}
                onChange={handleOptionChange}
              />
              <span>One way</span>
            </label>
            <label htmlFor="twoWay">
              <input
                type="radio"
                name="flightType"
                id="twoWay"
                value="twoWay"
                checked={selectedOption === "twoWay"}
                onChange={handleOptionChange}
              />
              <span>There and back</span>
            </label>
          </div>
          <div className="main__inputs-box">
            <div>
              <AviaInputs />
            </div>
            <div className="date__picker-wrapper">
              {selectedOption === "oneWay" ? (
                <CustomDatePicker
                  selectedDate={{ startDate: new Date() }}
                  handleDateChange={handleStartDateChange}
                  style={{ width: "100%" }}
                />
              ) : (
                <DoubleDatePicker
                  startDate={startDate}
                  endDate={endDate}
                  handleStartDateChange={handleStartDateChange}
                  handleEndDateChange={handleEndDateChange}
                  style={{ width: "50%" }}
                />
              )}
            </div>
            <div>
              <AviaPassenger />
            </div>
            <div>
              <button className="search-button" onClick={handleButtonClick}>
                Search
              </button>
            </div>
          </div>

          <div className="change__day-box">
            <input type="checkbox" id="change-day-checkbox" />
            <label htmlFor="change-day-checkbox">&nbsp; ±1 day</label>
          </div>
        </div>
      </div>
    </section>
  );
}
