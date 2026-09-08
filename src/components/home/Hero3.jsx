import React from 'react';
import { motion } from 'framer-motion';
import styles from './home.module.css';

import elephantbg from '../../assets/elephantbg.png';
import elephantcutout from '../../assets/elephantcutout.png';
import thoughtDot1 from '../../assets/icon-thughtdot.svg';
import thoughtDot2 from '../../assets/icon-thoughtdot2.svg';

export default function Hero3() {
  return (
    <div className={styles.slideContent}>
      <img src={elephantbg} alt="Elephant Background" className={styles.bgImage} />
      <img src={elephantcutout} alt="Elephant Cutout" className={styles.cutoutImage} />

      <motion.div 
        className={styles.thoughtGroupElephant}
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.dotTrailReverse}>
          <div className={styles.thoughtBox}>
            We remember when this land was ours
          </div>
          <img src={thoughtDot2} alt="" className={styles.dotLarge} />
          <img src={thoughtDot1} alt="" className={styles.dotMedium} />
          <img src={thoughtDot1} alt="" className={styles.dotSmall} />
        </div>
      </motion.div>
    </div>
  );
}