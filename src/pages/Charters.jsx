import React from "react";
import CharterPageSearch from "../search-section/main-pages/CharterPageSearch";
import Flights from "../components/Uzbek/Uzbek_flights/Uzbek_flights";
import Navbar from "../Navbar/Navbar";

export default function Charters() {
  return (
 <div>
  <Navbar />
   <CharterPageSearch />
  <Flights />
 </div>
  );
}
