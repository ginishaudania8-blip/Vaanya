import Navbar from '../shared/Navbar';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import lionBg from '../../assets/lionbg.png';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero backgroundImage={lionBg} />
      <About />
      <Contact />
    </div>
  );
};

export default Home;