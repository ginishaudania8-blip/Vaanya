import React from 'react';
import { motion } from 'framer-motion';
import styles from './home.module.css';

import elephantbg from '../../assets/elephantbg.png';
import elephantcutout from '../../assets/elephantcutout.png';

export default function Hero3() {
  return (
    <div className={styles.slideContent}>
      <img src={elephantbg} alt="Elephant Background" className={styles.bgImage} />
      <img src={elephantcutout} alt="Elephant Cutout" className={styles.cutoutImage} />

      <motion.div 
        className={`${styles.thoughtGroup} ${styles.thoughtElephant}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.thoughtBox}>
          We remember when this land was ours
        </div>
        <span className={styles.dotLargeRight} />
        <span className={styles.dotSmallRight} />
      </motion.div>
    </div>
  );
}