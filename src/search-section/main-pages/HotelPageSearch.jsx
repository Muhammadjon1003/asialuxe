import React, { useState } from "react";
import { useGlobalContext } from "../../Context/context";
import "./AviaPageSearch.scss";
import HotelInputs from "../Components/inputs/HotelInputs";
import HotelPassangers from "../Components/passenger-select/avia-passangers/HotelPassangers";
import SelectTransfer from "../Components/passenger-select/Components/SelectTransfer";
import DoubleDatePicker from "../Components/calendar/DoubleCalendar";

export default function HotelPageSearch() {
  const {
    startDate,
    endDate,
    setEndDate,
    setStartDate,
    handleButtonClick,
    itemSelected,
  } = useGlobalContext();

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
          <div
            className={`main__inputs-box hotel__inputs-wrapper ${
              itemSelected ? "half-width" : "full-width"
            }`}
          >
            <div>
              <HotelInputs className="hotel__input" />
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
              <HotelPassangers />
            </div>
            <div className="hotel__button">
              {itemSelected ? <SelectTransfer /> : ""}
              <button
                className="search-button"
                onClick={handleButtonClick}
                style={{ width: itemSelected ? "50%" : "100%" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
