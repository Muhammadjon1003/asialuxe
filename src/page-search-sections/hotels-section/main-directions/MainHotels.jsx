import React, { useState } from "react";
import "./MainHotels.scss";
// import Calendar from "../components/calendar/single-calendar/calendar";
import { Checkbox, Input } from "antd";
import SearchButton from "../components/search-button/SearchButton";
import TwoWayCalendar from "../components/calendar/double-calendar/TwoWayCalendar";

import { useGlobalContext } from "../../../Context/context";
import HotelPessenger from "../components/pessengers/ticket-pessenger/HotelPessenger";

export default function MainHotels() {
  const { showChecked } = useGlobalContext();
  return (
    <section className="routes__section">
      <div className="container">
        <div className=" routes__main-box">
          <div className="inputs__main-box hotel__input-main__box">
            <div>
              <div>
                <Input placeholder="Directions" />
              </div>
            </div>

            <TwoWayCalendar />
            <HotelPessenger />
            <SearchButton />
          </div>
        </div>
      </div>
    </section>
  );
}
