import React from 'react';
import { motion } from 'framer-motion';
import styles from './home.module.css';

import lionbg from '../../assets/lionbg.png';
import lioncutout from '../../assets/lioncutout.png';

export default function Hero1() {
  return (
    <div className={styles.slideContent}>
      <img src={lionbg} alt="Lion Background" className={styles.bgImage} />
      <img src={lioncutout} alt="Lion Cutout" className={styles.cutoutImage} />

      <motion.div 
        className={`${styles.thoughtGroup} ${styles.thoughtLion}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className={styles.dotSmall} />
        <span className={styles.dotLarge} />
        <div className={styles.thoughtBox}>
          This is the only home he knows
        </div>
      </motion.div>
    </div>
  );
}