import { useState } from "react";
import "./flights.css";
import { all_months, flights } from "../../../Context/data";
const Flights = () => {
  const [activePlace, setActivePlace] = useState("Antalya");
  const [activeMonth, setActiveMonth] = useState("Mart");

  const handlePlace = (place) => {
    setActivePlace(place);
  };
  const handleMonth = (month) => {
    setActiveMonth(month);
  };
  

  function separateThousands(number) {
    const numStr = number.toString();
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  let places = [];
  flights.map((flight) => {
    const { arrive_place } = flight;
    places = [arrive_place, ...places];
  });
  places = Array.from(new Set(places));
  const getMonthFromDate = (dateString) => {
    const monthIndex = parseInt(dateString.split("/")[0]) - 1;
    return all_months[monthIndex];
  };
  const getDayFromDate = (dateString) => {
    return dateString.split("/")[1];
  };
  function addHoursToTime(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    let newHours = hours + 7; // Add 7 hours

    // Adjust new hours if it exceeds 24
    if (newHours >= 24) {
        newHours -= 24;
    }

    // Format hours and minutes
    const newHoursStr = (newHours < 10 ? "0" : "") + newHours;
    const newMinutesStr = (minutes < 10 ? "0" : "") + minutes;

    // Return the formatted time string
    return `${newHoursStr}:${newMinutesStr}`;
}
const removeLeadingZeroFromDate = (day) => {
  // Split the date string into components
  
  // Remove leading zero from day and month if present
  const formattedDay = day.startsWith('0') ? day.substring(1) : day;
  // Return formatted date string
  return `${formattedDay}`;
};

  const startMonthIndex = all_months.indexOf("Mart");
  const months = all_months.slice(startMonthIndex);
  const filteredFlights = flights.filter((flight) => {
    const month = getMonthFromDate(flight.depart_date);
    return flight.arrive_place === activePlace && month === activeMonth;
  });
  const sortedFlights = filteredFlights.sort((a, b) => {
    const dateA = new Date(a.depart_date);
    const dateB = new Date(b.depart_date);
    return dateA - dateB;
  });
  return (
    <>
      <div className="container">
            <h4 className="main_title">Yo'nalishlar</h4>
        <div className="places">
          {places.map((place, index) => (
            <button
              key={place}
              className={activePlace === place ? "active_place" : ""}
              onClick={() => handlePlace(place)}
            >
              {place}
            </button>
          ))}
        </div>
            <h4 className="main_title">Sanalar</h4 >
        <div className="months">
          {months.map((month) => (
            <button
              key={month}
              className={activeMonth === month ? "active_place" : ""}
              onClick={() => handleMonth(month)}
            >
              {month}
            </button>
          ))}
        </div>
        <div className="flights">
          {sortedFlights.map((filteredFlight) => {
            const {
              id,
              depart_place,
              arrive_place,
              depart_time,
              arrive_time,
              is_seats_available,
              price,
              depart_place_acr,
              arrive_place_acr,
              type,
              depart_date,
            } = filteredFlight;
            return (
              <div key={id} className="flight">
                <div className="date">
                  <span>{removeLeadingZeroFromDate(getDayFromDate(depart_date))}</span>
                  <p>{getMonthFromDate(depart_date)}</p>
                </div>
                <div className="single_flight1">
                  <div className="acronyms">
                    <p>{depart_place_acr} <img src="right.svg" alt="right" className="right"/></p>
                    <p className="gray_text">{depart_place}</p>
                    <p>{depart_time}</p>
                  </div>
                  <div className="places_and_price">
                  <p>{arrive_place_acr}</p>
                    <p className="gray_text">{arrive_place}</p>
                    <p>{arrive_time}</p>
                  </div>
                  <div className="times">
                  {is_seats_available ? (
                      <p><img src="check.svg" alt="true"  className="right"/> Joylar mavjud</p>
                    ) : (
                      <p><img src="xmark.svg" alt="false" className="right" /> Joylar mavjud emas</p>
                    )}
                    <p className="gray_text">${price} </p>
                    <p>{separateThousands(price* 12500)} so'm</p>
                  </div>
                </div>
                {type === "there-and-back" ? (
                  <div className="single_flight1">
                  <div className="acronyms">
                    <p>{arrive_place_acr} <img src="right.svg" alt="right" className="right"/></p>
                    <p className="gray_text">{arrive_place}</p>
                    <p>{addHoursToTime(depart_time)}</p>
                  </div>
                  <div className="places_and_price">
                  <p>{depart_place_acr}</p>
                    <p className="gray_text">{depart_place}</p>
                    <p>{addHoursToTime(arrive_time)}</p>
                  </div>
                  <div className="times">
                  {is_seats_available ? (
                      <p><img src="check.svg" alt="true"  className="right"/> Joylar mavjud</p>
                    ) : (
                      <p><img src="xmark.svg" alt="false" className="right" /> Joylar mavjud emas</p>
                    )}
                    <p className="gray_text">${price} </p>
                    <p>{separateThousands(price* 12500)} so'm</p>
                  </div>
                </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Flights;
