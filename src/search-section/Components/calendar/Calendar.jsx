import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../../Context/context";
import "./Calendar.scss";

const CustomDatePicker = ({ handleDateChange, isOneWay }) => {
  const { startDate, modifiedDate } = useGlobalContext();

  return (
    <DatePicker
      selected={startDate ? modifiedDate : null}
      onChange={handleDateChange}
      dateFormat="MM/dd/yyyy"
      placeholderText="Start Date"
      className="single__date-picker"
    />
  );
};

export default CustomDatePicker;
