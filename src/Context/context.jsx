import React, { createContext, useContext, useState, useReducer } from "react";
import { flights, pessengerAmount } from "../data";
import { reducer } from "./reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialPassengerAmount = {
    passengerType: pessengerAmount,
    total: 0,
  };

  const [selectedOption, setSelectedOption] = useState("oneWay");
  const [state, dispatch] = useReducer(reducer, initialPassengerAmount);

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

  return (
    <AppContext.Provider
      value={{
        ...state,
        selectedOption,
        setSelectedOption,
        handleOptionChange,
        showChecked,
        increase,
        decrease,
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
