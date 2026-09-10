import React from 'react';
import { motion } from 'framer-motion';
import styles from './home.module.css';

import deerbg from '../../assets/deerbg.png';
import deercutout from '../../assets/deercutout.png';

export default function Hero4() {
  return (
    <div className={styles.slideContent}>
      <img src={deerbg} alt="Deer Background" className={styles.bgImage} />
      <img src={deercutout} alt="Deer Cutout" className={styles.cutoutImage} />

      <motion.div 
        className={`${styles.thoughtGroup} ${styles.thoughtDeer}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className={styles.dotSmall} />
        <span className={styles.dotLarge} />
        <div className={styles.thoughtBox}>
          We stay still. It's the only defense we have
        </div>
      </motion.div>
    </div>
  );
}