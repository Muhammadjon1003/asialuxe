import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Avia"; // Import the Home component
import Contact from "./pages/Hotel"; // Import the Contact component
import Hotel from "./pages/Hotel";
import Avia from "./pages/Avia";
import Charter from "./pages/Charter";
import Tour from "./pages/Tour";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/avia" />} />
        <Route path="/avia" element={<Avia />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/charter" element={<Charter />} />
      </Routes>
    </div>
  );
}

export default App;
