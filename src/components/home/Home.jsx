import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import styles from './Home.module.css';

import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Hero4 from './Hero4';

const slides = [<Hero1 key="1" />, <Hero2 key="2" />, <Hero3 key="3" />, <Hero4 key="4" />];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    zIndex: 1,
  }),
  center: {
    x: 0,
    zIndex: 1,
    transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    zIndex: 0,
    transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const navigate = useNavigate();

  const current = Math.abs(page % slides.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.frameContainer}>
        {/* Shared Active-State Navbar */}
        <header style={{ position: 'absolute', top: '24px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 10 }}>
          <Navbar />
        </header>

        {/* Carousel Arrows */}
        <button 
          className={`${styles.navArrow} ${styles.prevArrow}`} 
          onClick={() => paginate(-1)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button 
          className={`${styles.navArrow} ${styles.nextArrow}`} 
          onClick={() => paginate(1)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Slide Content */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.animatedSlideWrapper}
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>

        {/* Primary CTA */}
        <button className={styles.actionButton} onClick={() => navigate('/park-selection')}>
          LET'S BEGIN &rarr;
        </button>
      </div>
    </div>
  );
}