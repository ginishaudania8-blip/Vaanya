import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './home.module.css';

// Carousel Slides
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Hero4 from './Hero4';

// Views
import About from './About';
import Contact from './Contact';
import ParkSelect from '../parkSelection/ParkSelect';

import carouselNextIcon from '../../assets/icon-carousel-next.svg';
import letsBeginArrow from '../../assets/letsbeginarrow.svg';

const heroSlides = [<Hero1 key="h1" />, <Hero2 key="h2" />, <Hero3 key="h3" />, <Hero4 key="h4" />];

export default function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('HOME');
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      let next = prevPage + newDirection;
      if (next < 0) next = heroSlides.length - 1;
      if (next >= heroSlides.length) next = 0;
      return [next, newDirection];
    });
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <main className={styles.homeWrapper}>
      <div className={styles.frameContainer}>
        {/* Floating Top Navigation Header */}
        <nav className={styles.navBar}>
          <button
            className={activeTab === 'HOME' ? styles.activeNavLink : styles.navLink}
            onClick={() => setActiveTab('HOME')}
          >
            HOME
          </button>
          <button
            className={activeTab === 'ABOUT' ? styles.activeNavLink : styles.navLink}
            onClick={() => setActiveTab('ABOUT')}
          >
            ABOUT
          </button>
          <button
            className={activeTab === 'CONTACT' ? styles.activeNavLink : styles.navLink}
            onClick={() => setActiveTab('CONTACT')}
          >
            CONTACT
          </button>
        </nav>

        {/* Top-Right Login Pill Button */}
        {activeTab === 'PARK_SELECT' && (
          <button
            className={styles.loginPillButton}
            onClick={() => navigate('/login')}
          >
            LOGIN
          </button>
        )}

        {/* Home View Carousel */}
        {activeTab === 'HOME' && (
          <>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
                className={styles.animatedSlideWrapper}
              >
                {heroSlides[page]}
              </motion.div>
            </AnimatePresence>

            <button
              className={`${styles.navArrow} ${styles.prevArrow}`}
              onClick={() => paginate(-1)}
              aria-label="Previous Slide"
            >
              <img src={carouselNextIcon} alt="" className={styles.rotateArrow} />
            </button>

            <button
              className={`${styles.navArrow} ${styles.nextArrow}`}
              onClick={() => paginate(1)}
              aria-label="Next Slide"
            >
              <img src={carouselNextIcon} alt="" />
            </button>

            <button
              className={styles.actionButton}
              onClick={() => setActiveTab('PARK_SELECT')}
            >
              <span>LET'S BEGIN</span>
              <img src={letsBeginArrow} alt="" className={styles.actionIcon} />
            </button>
          </>
        )}

        {/* About View */}
        {activeTab === 'ABOUT' && (
          <div className={styles.animatedSlideWrapper}>
            <About />
          </div>
        )}

        {/* Contact View */}
        {activeTab === 'CONTACT' && (
          <div className={styles.animatedSlideWrapper}>
            <Contact />
          </div>
        )}

        {/* Park Selection View */}
        {activeTab === 'PARK_SELECT' && (
          <div className={styles.animatedSlideWrapper}>
            <ParkSelect
              onSelectPark={(park) => {
                if (park.id === 'kaziranga') {
                  navigate('/dashboard');
                }
              }}
            />
          </div>
        )}
      </div>
    </main>
  );
}