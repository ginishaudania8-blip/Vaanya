import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import ParkSelect from "./components/parkSelection/ParkSelect.jsx";
import RangerLogin from "./pages/RangerLogin.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/park-select" element={<ParkSelect />} />
        <Route path="/login" element={<RangerLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}