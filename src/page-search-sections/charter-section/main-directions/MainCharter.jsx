import React, { useState } from "react";
import "./MainCharter.scss";
import Calendar from "../components/calendar/single-calendar/calendar";
import { Checkbox, Input } from "antd";
import TicketPessenger from "../components/pessengers/ticket-pessenger/TicketPessenger";
import SearchButton from "../components/search-button/SearchButton";
import TwoWayCalendar from "../components/calendar/double-calendar/TwoWayCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../../../Context/context";

export default function MainCharter() {
  const { selectedOption, setSelectedOption, handleOptionChange, showChecked } =
    useGlobalContext();
  return (
    <section className="routes__section">
      <div className="container">
        <div className="routes__main-box">
          <div className="checkbox__box">
            <div className="radio__main-box">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="oneWay"
                  checked={selectedOption === "oneWay"}
                  onChange={handleOptionChange}
                />
                <span>One way</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="twoWay"
                  checked={selectedOption === "twoWay"}
                  onChange={handleOptionChange}
                />
                <span>There and back</span>
              </label>
            </div>
          </div>

          <div className="inputs__main-box">
            <div>
              <div>
                <Input placeholder="Directions" />
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  className="departure-icon"
                />
              </div>
              <img
                className="routes__icon"
                src="https://asialuxe.uz/assets/change_reverse-0de9b923.svg"
                alt=""
              />
            </div>
            <div>
              <Input placeholder="Directions" />
              <FontAwesomeIcon icon={faPlaneArrival} className="arrival-icon" />
            </div>
            {selectedOption === "oneWay" ? <Calendar /> : <TwoWayCalendar />}
            <TicketPessenger />
            <SearchButton />
          </div>

          <div>
            <Checkbox onChange={showChecked}>±1 day</Checkbox>
          </div>
        </div>
      </div>
    </section>
  );
}
