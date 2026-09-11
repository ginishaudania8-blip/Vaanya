import React from 'react';
import styles from './home.module.css';

import elephantbg from '../../assets/elephantbg.png';
import elephantcutout from '../../assets/elephantcutout.png';

export default function Hero3() {
  return (
    <div className={styles.slideContent}>
      <img src={elephantbg} alt="Elephant Background" className={styles.bgImage} />
      <img src={elephantcutout} alt="Elephant Cutout" className={styles.cutoutImage} />

      <div className={`${styles.thoughtGroup} ${styles.thoughtElephant}`}>
        <div className={styles.thoughtBox}>
          We remember when this land was ours
        </div>
      </div>
    </div>
  );
}