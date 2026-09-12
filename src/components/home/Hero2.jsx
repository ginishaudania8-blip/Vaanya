import React from 'react';
import styles from './Home.module.css';

import rhinobg from '../../assets/rhinobg.png';
import rhinocutout from '../../assets/rhinocutout.png';

export default function Hero2() {
  return (
    <div className={styles.slideContent}>
      <img src={rhinobg} alt="Rhino Background" className={styles.bgImage} />
      <img src={rhinocutout} alt="Rhino Cutout" className={styles.cutoutImage} />

      <div className={`${styles.thoughtGroup} ${styles.thoughtRhino}`}>
        <div className={styles.thoughtBox}>
          We used to roam further than this
        </div>
      </div>
    </div>
  );
}