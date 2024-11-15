import React, { useState } from "react";
import { useGlobalContext } from "../../Context/context";
import "./SearchSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlane, 
  faHotel, 
  faLocationDot,
  faCalendar,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from 'react-router-dom';

export default function SearchSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    activeTab,
    setActiveTab,
    departurePlace,
    arrivalPlace,
    departureSearch,
    arrivalSearch,
    startDate,
    setStartDate,
    data,
    handleSearch,
    setFilteredId,
    setIsSearched,
    typingDeparture,
    typingArrival,
    filteredFlightsDeparture,
    filteredFlightsArrival,
    handleDepartureLiClick,
    handleArrivalLiClick,
  } = useGlobalContext();

  const [passengerCount, setPassengerCount] = useState(1);
  const [classType, setClassType] = useState('economy');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (activeTab === 'flights') {
      const formattedDate = startDate ? new Date(startDate).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      }) : '';

      console.log('Search Criteria:', {
        departurePlace,
        arrivalPlace,
        date: formattedDate
      });

      const matchingFlights = data.filter(flight => {
        return flight.depart_place.toLowerCase() === departurePlace.toLowerCase() &&
               flight.arrive_place.toLowerCase() === arrivalPlace.toLowerCase() &&
               flight.depart_date === formattedDate;
      });

      console.log('Matching Flights:', matchingFlights);

      if (matchingFlights.length > 0) {
        const flightId = matchingFlights[0].id;
        
        setFilteredId([flightId]);
        setIsSearched(true);
        
        navigate(`/charter/${flightId}`);
        
        console.log(`Navigating to /charter/${flightId}`);
      } else {
        alert('No flights found for selected criteria');
      }
    } else {
      handleSearch(e);
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="search-card">
          <div className="card-header">
            <h2>Book Your Next Adventure</h2>
          </div>
          
          <div className="tabs">
            <div className="tab-list">
              <button 
                className={`tab-button ${activeTab === 'flights' ? 'active' : ''}`}
                onClick={() => setActiveTab('flights')}
              >
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
              </button>
              <button 
                className={`tab-button ${activeTab === 'hotels' ? 'active' : ''}`}
                onClick={() => setActiveTab('hotels')}
              >
                <FontAwesomeIcon icon={faHotel} />
                <span>Hotels</span>
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'flights' ? (
                <form onSubmit={handleSubmit} className="search-form">
                  <div className="form-grid">
                    <div className="form-group col-span-2">
                      <div className="input-group">
                        <label>From</label>
                        <div className="input-wrapper">
                          <FontAwesomeIcon icon={faLocationDot} className="input-icon" />
                          <input
                            type="text"
                            value={departurePlace}
                            onChange={departureSearch}
                            placeholder="Departure city"
                          />
                          {typingDeparture && filteredFlightsDeparture.length > 0 && (
                            <div className="suggestions-dropdown">
                              {filteredFlightsDeparture.slice(0, 5).map((item, index) => (
                                <div 
                                  key={index} 
                                  className="suggestion-item"
                                  onClick={() => handleDepartureLiClick(item.depart_place)}
                                >
                                  <FontAwesomeIcon icon={faPlane} className="suggestion-icon" />
                                  <div className="suggestion-content">
                                    <span className="city">{item.depart_place}</span>
                                    <span className="code">{item.depart_place_acr}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="input-group">
                        <label>To</label>
                        <div className="input-wrapper">
                          <FontAwesomeIcon icon={faLocationDot} className="input-icon" />
                          <input
                            type="text"
                            value={arrivalPlace}
                            onChange={arrivalSearch}
                            placeholder="Arrival city"
                          />
                          {typingArrival && filteredFlightsArrival.length > 0 && (
                            <div className="suggestions-dropdown">
                              {filteredFlightsArrival.slice(0, 5).map((item, index) => (
                                <div 
                                  key={index} 
                                  className="suggestion-item"
                                  onClick={() => handleArrivalLiClick(item.arrive_place)}
                                >
                                  <FontAwesomeIcon icon={faPlane} className="suggestion-icon" />
                                  <div className="suggestion-content">
                                    <span className="city">{item.arrive_place}</span>
                                    <span className="code">{item.arrive_place_acr}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Date</label>
                      <div className="input-wrapper">
                        <FontAwesomeIcon icon={faCalendar} className="input-icon" />
                        <input 
                          type="date" 
                          value={startDate || ''} 
                          onChange={handleStartDateChange}
                          className="date-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Passengers & Class</label>
                      <div className="select-group">
                        <div className="input-wrapper">
                          <FontAwesomeIcon icon={faUser} className="input-icon" />
                          <select 
                            value={passengerCount} 
                            onChange={(e) => setPassengerCount(e.target.value)}
                            className="select-input"
                          >
                            <option value="1">1 Passenger</option>
                            <option value="2">2 Passengers</option>
                            <option value="3">3 Passengers</option>
                            <option value="4">4 Passengers</option>
                          </select>
                        </div>
                        <div className="input-wrapper">
                          <select 
                            value={classType} 
                            onChange={(e) => setClassType(e.target.value)}
                            className="select-input"
                          >
                            <option value="economy">Economy</option>
                            <option value="business">Business</option>
                            <option value="first">First Class</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                    Search Flights
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="search-form">
                  <div className="form-grid">
                    <div className="form-group col-span-2">
                      <div className="input-group">
                        <label>Destination</label>
                        <div className="input-wrapper">
                          <FontAwesomeIcon icon={faLocationDot} className="input-icon" />
                          <input
                            type="text"
                            value={arrivalPlace}
                            onChange={arrivalSearch}
                            placeholder="Where are you going?"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Check-in - Check-out</label>
                      <div className="input-wrapper">
                        <FontAwesomeIcon icon={faCalendar} className="input-icon" />
                        <input type="date" value={startDate} onChange={handleStartDateChange} />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Guests & Rooms</label>
                      <div className="select-group">
                        <div className="input-wrapper">
                          <FontAwesomeIcon icon={faUser} className="input-icon" />
                          <select className="select-input">
                            <option>1 Guest</option>
                            <option>2 Guests</option>
                            <option>3 Guests</option>
                            <option>4 Guests</option>
                          </select>
                        </div>
                        <div className="input-wrapper">
                          <select className="select-input">
                            <option>1 Room</option>
                            <option>2 Rooms</option>
                            <option>3 Rooms</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                    Search Hotels
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 