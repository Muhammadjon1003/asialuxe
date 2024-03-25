import React, { useState } from "react";
import { useGlobalContext } from "../../Context/context";
import "./AviaPageSearch.scss";
import AviaPassenger from "../Components/passenger-select/avia-passangers/AviaPassangers";
import CharterInputs from "../Components/inputs/CharterInput";
import DoubleDatePicker from "../Components/calendar/DoubleCalendar";

export default function CharterPageSearch() {
  const { startDate, endDate, setEndDate, setStartDate, handleButtonClick } =
    useGlobalContext();

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
          <div className="main__inputs-box">
            <div>
              <CharterInputs />
            </div>
            <div className="date__picker-wrapper">
              <DoubleDatePicker
                startDate={startDate}
                endDate={endDate}
                handleStartDateChange={handleStartDateChange}
                handleEndDateChange={handleEndDateChange}
              />
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
        </div>
      </div>
    </section>
  );
}
