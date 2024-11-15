import { Routes, Route } from 'react-router-dom';
import Avia from "./pages/Avia";
import Error from "./pages/Error";
import SingleFlight from "./components/Uzbek/Uzbek_charter/single_flight";
import Reservation from "./components/Uzbek/Reservation/reservation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Avia />} />
      <Route path="/avia" element={<Avia />} />
      <Route path="/charter/:id" element={<SingleFlight />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
