import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DoubleDatePicker = ({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
  modifiedDate,
}) => {
  return (
    <div className="double__date-wrapper">
      <DatePicker
        className="start__date-picker"
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="MM/dd/yyyy"
        placeholderText="Start Date"
        value={modifiedDate}
      />
      <DatePicker
        className="end__date-picker"
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="MM/dd/yyyy"
        placeholderText="End Date"
      />
    </div>
  );
};

export default DoubleDatePicker;
