import Navbar from '../components/shared/Navbar.jsx'
import Hero from '../components/home/Hero.jsx'
import About from '../components/home/About.jsx'
import Contact from '../components/home/Contact.jsx'

function Home() {
  // Assembles Navbar + Hero + About + Contact as one scrollable landing page.
  return (
    <div>
      <Navbar />
      <Hero backgroundImage={undefined} />
      <About />
      <Contact />
    </div>
  )
}

export default Home
