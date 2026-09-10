import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import RangerLogin from './pages/RangerLogin';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<RangerLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;