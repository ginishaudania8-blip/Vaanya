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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className={styles.thoughtBox}>
          This is the only home he knows
        </div>
      </motion.div>
    </div>
  );
}