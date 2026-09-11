import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import styles from './about.module.css';

import aboutBg from '../../assets/aboutcontactbg.png';

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      {/* Top Header Navigation */}
      <header style={{ position: 'absolute', top: '24px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 50 }}>
        <Navbar />
      </header>

      {/* Background Layer */}
      <img src={aboutBg} alt="Forest Background" className={styles.bgImage} />

      {/* Glass Content Card */}
      <motion.div 
        className={styles.aboutCard}
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        <p className={styles.paragraph}>
          Every year, floods force animals out of their homes. Protection zones shrink under policy decisions made far from the forest floor. Poaching happens in silence, often unnoticed until it's too late. The people trying to prevent all of this — forest rangers, NGO workers, local communities — are left piecing the picture together from scattered phone calls and paper reports.
        </p>

        <p className={styles.paragraph}>
          Vaanya brings it all into one place: live flood risk, protected zone boundaries, and ground reports from the people watching closest — so the response can happen before the damage, not after.
        </p>

        <p className={styles.paragraph}>
          Built and tested on Kaziranga National Park, home to two-thirds of the world's one-horned rhinos — and designed to extend to any forest that needs the same watchful eye.
        </p>
      </motion.div>
    </div>
  );
}