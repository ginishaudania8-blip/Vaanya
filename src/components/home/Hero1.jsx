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
        className={styles.thoughtGroupLion}
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.dotTrail}>
          <span className={styles.dotSmall} />
          <span className={styles.dotMedium} />
          <span className={styles.dotLarge} />
        </div>

        <div className={styles.thoughtBox}>
          This is the only home he knows
        </div>
      </motion.div>
    </div>
  );
}