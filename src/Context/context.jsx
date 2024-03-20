import React, { createContext, useContext, useState, useReducer } from "react";
import { flights, pessengerAmount } from "../data";
import { reducer } from "./reducer";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialPassengerAmount = {
    passengerType: pessengerAmount,
    total: 0,
  };

  //! States

  const [selectedOption, setSelectedOption] = useState("oneWay");
  const [state, dispatch] = useReducer(reducer, initialPassengerAmount);

  //! Functions

  dayjs.extend(customParseFormat);

  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  });

  const disabledRangeTime = (_, type) => {
    if (type === "start") {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const showChecked = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const increase = (id) => {
    dispatch({ type: "inc", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "dec", payload: id });
  };

  const allFuncs = {
    handleOptionChange,
    disabledDate,
    disabledDateTime,
    disabledRangeTime,
    showChecked,
    increase,
    decrease,
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        selectedOption,
        ...allFuncs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
