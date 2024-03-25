import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { flights, hotels, pessengerAmount } from "./data";
import { reducer } from "./reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(flights);
  const [hotelData, setHotelData] = useState(hotels);
  const [departurePlace, setDeparturePlace] = useState("");
  const [arrivalPlace, setArrivalPlace] = useState("");
  const [singleDate, setSingleDate] = useState("");
  const [doubleDate, setDoubleDate] = useState("");
  const [typingDeparture, setTypingDeparture] = useState(false);
  const [typingArrival, setTypingArrival] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredId, setFilteredId] = useState([]);
  const [itemSelected, setItemSelected] = useState(false);
  const [selectedChild, setSelectedChild] = useState("");
  const [allPassengers, setAllPassengers] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");
  const location = useLocation();

  const formattedDate =
    startDate instanceof Date
      ? startDate.toLocaleDateString("en-GB", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
      : "";

  const month = formattedDate.slice(3, 5);
  const day = formattedDate.slice(0, 2);
  const year = formattedDate.slice(6);
  const modifiedDate = `${month}/${day}/${year}`;

  const filterFlightData = (
    data,
    modifiedDate,
    departurePlace,
    arrivalPlace
  ) => {
    try {
      const findFlight = data.filter(
        (item) =>
          item.depart_date === modifiedDate &&
          item.depart_place.toLowerCase() === departurePlace.toLowerCase() &&
          item.arrive_place.toLowerCase() === arrivalPlace.toLowerCase()
      );

      const filteredIds = findFlight.map((item) => Number(item.id));
      return filteredIds;
    } catch (error) {
      console.error("Error filtering data:", error);
      return [];
    }
  };

  const filterHotelData = (hotelData, arrivalPlace) => {
    try {
      const findFlight = hotelData.filter(
        (item) => item.country.toLowerCase() === arrivalPlace.toLowerCase()
      );

      const filteredIds = findFlight.map((item) => Number(item.id));
      return filteredIds;
    } catch (error) {
      console.error("Error filtering data:", error);
      return [];
    }
  };

  const handleButtonClick = () => {
    let filteredIds;

    switch (location.pathname) {
      case "/avia":
      case "/tour":
      case "/charter":
        filteredIds = filterFlightData(
          data,
          modifiedDate,
          departurePlace,
          arrivalPlace
        );
        break;
      case "/hotel":
        filteredIds = filterHotelData(hotelData, arrivalPlace);
        break;
      default:
        console.log("Unknown path");
        break;
    }

    setFilteredId(filteredIds);
    setStartDate(null);
    setEndDate(null);
    setDeparturePlace("");
    setArrivalPlace("");
  };

  const handleDepartureLiClick = (departPlace) => {
    setDeparturePlace(departPlace);
    setTypingDeparture(false);
  };

  const handleArrivalLiClick = (arrivePlace) => {
    setArrivalPlace(arrivePlace);
    setTypingArrival(false);
  };

  const departureSearch = (event) => {
    const value = event.target.value;
    setDeparturePlace(value);
    setTypingDeparture(!!value);
  };

  const arrivalSearch = (event) => {
    const value = event.target.value;
    setArrivalPlace(value);
    setTypingArrival(!!value);
  };

  const filteredFlightsDeparture = data.filter((item) =>
    item.depart_place.toLowerCase().includes(departurePlace.toLowerCase())
  );

  const filteredFlightsArrival = data.filter((item) =>
    item.arrive_place.toLowerCase().includes(arrivalPlace.toLowerCase())
  );

  const filteredHotelsArrival = hotelData.filter((item) =>
    item.country.toLowerCase().includes(arrivalPlace.toLowerCase())
  );

  const initialPassengerAmount = {
    passengerType: pessengerAmount,
    total: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialPassengerAmount);

  const increase = (id) => {
    dispatch({ type: "inc", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "dec", payload: id });
  };

  const funcAndStates = {
    data,
    hotelData,
    filteredHotelsArrival,
    departurePlace,
    setDeparturePlace,
    arrivalPlace,
    setArrivalPlace,
    singleDate,
    setSingleDate,
    doubleDate,
    setDoubleDate,
    handleArrivalLiClick,
    handleDepartureLiClick,
    typingDeparture,
    typingArrival,
    setTypingArrival,
    setTypingDeparture,
    filteredFlightsArrival,
    filteredFlightsDeparture,
    departureSearch,
    arrivalSearch,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    startDate,
    setStartDate,
    modifiedDate,
    handleButtonClick,
    increase,
    decrease,
    itemSelected,
    setItemSelected,
    setSelectedChild,
    setAllPassengers,
    setSelectedClass,
    location,
  };

  return (
    <AppContext.Provider
      value={{
        ...funcAndStates,
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, AppContext };
