import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import RangerLogin from './pages/RangerLogin';
import Dashboard from './pages/Dashboard';
import ParkSelect from './components/parkSelection/ParkSelect';
import About from './components/home/About';
import Contact from './components/home/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/park-selection" element={<ParkSelect />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<RangerLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;