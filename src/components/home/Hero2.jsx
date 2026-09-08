import React from 'react';
import { motion } from 'framer-motion';
import styles from './home.module.css';

import rhinobg from '../../assets/rhinobg.png';
import rhinocutout from '../../assets/rhinocutout.png';
import thoughtDot1 from '../../assets/icon-thughtdot.svg';
import thoughtDot2 from '../../assets/icon-thoughtdot2.svg';

export default function Hero2() {
  return (
    <div className={styles.slideContent}>
      <img src={rhinobg} alt="Rhino Background" className={styles.bgImage} />
      <img src={rhinocutout} alt="Rhino Cutout" className={styles.cutoutImage} />

      <motion.div 
        className={styles.thoughtGroupRhino}
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.dotTrail}>
          <img src={thoughtDot1} alt="" className={styles.dotSmall} />
          <img src={thoughtDot1} alt="" className={styles.dotMedium} />
          <img src={thoughtDot2} alt="" className={styles.dotLarge} />
        </div>
        <div className={styles.thoughtBox}>
          We used to roam further than this
        </div>
      </motion.div>
    </div>
  );
}