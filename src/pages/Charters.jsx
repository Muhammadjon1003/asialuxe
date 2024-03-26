import React, { useEffect } from "react";
import CharterPageSearch from "../search-section/main-pages/CharterPageSearch";
import Flights from "../components/Uzbek/Uzbek_flights/Uzbek_flights";
import Navbar from "../Navbar/Navbar";
import { useGlobalContext } from "../Context/context";
import Uzbek_charter from "../components/Uzbek/Uzbek_charter/Uzbek_charter";
import AviaPageSearch from "../search-section/main-pages/AviaPageSearch";

export default function Charters() {
  const {isSearched} = useGlobalContext()
  useEffect(() => {
    console.log(isSearched);
  }, [isSearched])
  return (
 <div>
  <Navbar />
   <AviaPageSearch />
   {isSearched ? (
    <Uzbek_charter />
   ) : (
    <Flights />
   )}
 </div>
  );
}
