import React from "react";
import { useGlobalContext } from "../../Context/context";
import "./AviaPageSearch.scss";
import TourInputs from "../Components/inputs/TourInputs";
import TourPassenger from "../Components/passenger-select/avia-passangers/TourPassangers";
import DoubleDatePicker from "../Components/calendar/DoubleCalendar";

export default function TourPageSearch() {
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
              <TourInputs />
            </div>
            <div className="date__picker-wrapper">
              <DoubleDatePicker
                startDate={startDate}
                endDate={endDate}
                handleStartDateChange={handleStartDateChange}
                handleEndDateChange={handleEndDateChange}
                style={{ width: "50%" }}
              />
            </div>
            <div>
              <TourPassenger />
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
