import React from 'react';
import styles from './Home.module.css';

import deerbg from '../../assets/deerbg.png';
import deercutout from '../../assets/deercutout.png';

export default function Hero4() {
  return (
    <div className={styles.slideContent}>
      <img src={deerbg} alt="Deer Background" className={styles.bgImage} />
      <img src={deercutout} alt="Deer Cutout" className={styles.cutoutImage} />

      <div className={`${styles.thoughtGroup} ${styles.thoughtDeer}`}>
        <div className={styles.thoughtBox}>
          We stay still. It's the only defense we have
        </div>
      </div>
    </div>
  );
}