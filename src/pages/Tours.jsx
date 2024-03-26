import React from "react";
import TourPageSearch from "../search-section/main-pages/TourPageSearch";
import Navbar from "../Navbar/Navbar";
import Products from "../components/Uzbek/Uzbek_tours/Products/Products";

export default function Tours() {
  return (
    <div>
      <Navbar />
      <TourPageSearch />
      <Products />
    </div>
  );
}
