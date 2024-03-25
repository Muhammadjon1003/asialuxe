import React from "react";
import HotelPageSearch from "../search-section/main-pages/HotelPageSearch";
import Uzbek_hotels from "../components/Uzbek/Uzbek_hotels/Uzbek_hotels";
import Navbar from "../Navbar/Navbar";

export default function Hotels() {
  return (
    <div>
      <Navbar />
      <HotelPageSearch />
      <Uzbek_hotels />
    </div>
  );
}
