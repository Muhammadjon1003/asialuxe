import React from "react";
import Flights from "../components/Uzbek/Uzbek_flights/Uzbek_flights";
import SearchSection from "../search-section/main-pages/SearchSection";
import Uzbek_header from "../components/Uzbek/Uzbek_header/Uzbek_header";
import Footer from "../components/Footer/Footer";

export default function Avia() {
  return (
    <div style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <Uzbek_header />
      <SearchSection />
      <Flights />
      <Footer />
    </div>
  );
}
