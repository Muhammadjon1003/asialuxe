import React from "react";
import AviaPageSearch from "../search-section/main-pages/AviaPageSearch";
import Flights from "../components/Uzbek/Uzbek_flights/Uzbek_flights";
import Navbar from "../Navbar/Navbar";
import Hotels from "./Hotels";
import Products from "../components/Uzbek/Uzbek_tours/Products/Products";
import Uzbek_hotels from "../components/Uzbek/Uzbek_hotels/Uzbek_hotels";

function onChange(params) {
  console.log(params);
}

export default function Avia() {
  return (
    <div>
      <Navbar />
      <AviaPageSearch />
      <Flights />
      <Uzbek_hotels />
      <Products />
    </div>
  );
}
