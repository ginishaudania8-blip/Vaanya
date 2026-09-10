import React from 'react';
import { motion } from 'framer-motion';
import styles from './home.module.css';

import rhinobg from '../../assets/rhinobg.png';
import rhinocutout from '../../assets/rhinocutout.png';

export default function Hero2() {
  return (
    <div className={styles.slideContent}>
      <img src={rhinobg} alt="Rhino Background" className={styles.bgImage} />
      <img src={rhinocutout} alt="Rhino Cutout" className={styles.cutoutImage} />

      <motion.div 
        className={`${styles.thoughtGroup} ${styles.thoughtRhino}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className={styles.dotSmall} />
        <span className={styles.dotLarge} />
        <div className={styles.thoughtBox}>
          We used to roam further than this
        </div>
      </motion.div>
    </div>
  );
}