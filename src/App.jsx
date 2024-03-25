import { Navigate, Route, Routes } from "react-router-dom";
import Avia from "./pages/Avia";
import Tours from "./pages/Tours";
import Charters from "./pages/Charters";
import Hotels from "./pages/Hotels";
import Error from "./pages/Error";
import Navbar from "./Navbar/Navbar";
import Uzbek_header from "./components/Uzbek/Uzbek_header/Uzbek_header";
import Flights from "./components/Uzbek/Uzbek_flights/Uzbek_flights";

function App() {
  return (
    <>
      <Uzbek_header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/avia" />} />
        <Route path="/avia" element={<Avia />} />
        <Route path="/hotel" element={<Hotels />} />
        <Route path="/tour" element={<Tours />} />
        <Route path="/charter" element={<Charters />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
