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
  const [filteredId, setFilteredId] = useState(null);
  const [itemSelected, setItemSelected] = useState(false);
  const [isSearched, setisSearched] = useState(false);
  const [redirect, setredirect] = useState(false);
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
  const url = [
    {
      "id": 1,
      "image": 'https://eps.asialuxe.app/upload/iblock/1aa/hfz8am4t39kohjqg0of0qhq1zt56208k.webp',
      "body": "Саудовская Аравия - Умра"
    },
    {
      "id": 2,
      "image": 'https://eps.asialuxe.app/upload/iblock/c72/iky6wm0cilvdne2yi9v64qd9rdqk0mz7.jpg',
      "body": "Анталъя"
    },
    {
      "id": 3,
      "image": 'https://eps.asialuxe.app/upload/iblock/a52/uuvrkcko5ytezc2o5cbr98610l5w5po9.webp',
      "body": "Аланъя"
    },
    {
      "id": 4,
      "image": 'https://eps.asialuxe.app/upload/iblock/5cb/oszu4w9uuio4220e6hfj2j8gh4zfrwwr.jpg',
      "body": "Бодрум"
    },
    {
      "id": 5,
      "image": '	https://eps.asialuxe.app/upload/iblock/52e/r4r3lx8zao413l0hf1p7o4ls3r7hemlk.jpg',
      "body": "Анкара"
    },
    {
      "id": 6,
      "image": '	https://eps.asialuxe.app/upload/iblock/d97/i69lp9cich7hfjt2mvmztfa4vtoxly16.webp',
      "body": "Даламан"
    }
  ];
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
    setisSearched(true)
    setStartDate(null);
    setEndDate(null);
    setDeparturePlace("");
    setArrivalPlace("");
    setredirect(true)
  };
console.log(redirect);
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
    filteredId,
    isSearched, redirect,
    url
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
