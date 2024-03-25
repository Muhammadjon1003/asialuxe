import React from "react";
import AviaPageSearch from "../search-section/main-pages/AviaPageSearch";
import Flights from "../components/Uzbek/Uzbek_flights/Uzbek_flights";

function onChange(params) {
  console.log(params);
}

export default function Avia() {
  return (
    <div>
      <AviaPageSearch />
      <Flights />
    </div>
  );
}
