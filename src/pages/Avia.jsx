import React from "react";
import AviaPageSearch from "../search-section/main-pages/AviaPageSearch";
import Flights from "../components/Uzbek/Uzbek_flights/Uzbek_flights";
import Navbar from "../Navbar/Navbar";

function onChange(params) {
  console.log(params);
}

export default function Avia() {
  return (
    <div>
      <Navbar />
      <AviaPageSearch />
      <Flights />
    </div>
  );
}
