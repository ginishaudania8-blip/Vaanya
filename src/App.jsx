import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import RangerLogin from './pages/RangerLogin.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ParkSelect from './components/parkSelection/ParkSelect.jsx';
import About from './components/home/About.jsx';
import Contact from './components/home/Contact.jsx';

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