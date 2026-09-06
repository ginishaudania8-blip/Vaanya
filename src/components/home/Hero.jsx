import { useState, useCallback } from 'react';
import styles from './Hero.module.css';

import lionbg from '../../assets/lionbg.png';
import lioncutout from '../../assets/lioncutout.png';
import rhinobg from '../../assets/rhinobg.png';
import rhinocutout from '../../assets/rhinocutout.png';
import elephantbg from '../../assets/elephantbg.png';
import elephantcutout from '../../assets/elephantcutout.png';
import deerbg from '../../assets/deerbg.png';
import deercutout from '../../assets/deercutout.png';

import nextArrowIcon from '../../assets/icon-carousel-next.svg';
import beginArrowIcon from '../../assets/letsbeginarrow.svg';
import thoughtDot from '../../assets/icon-thughtdot.svg';
import thoughtDot2 from '../../assets/icon-thoughtdot2.svg';

const slides = [
  { bg: lionbg, cutout: lioncutout, caption: "This is the only home he knows", captionTop: '13.5%', captionLeft: '50%' },
  { bg: rhinobg, cutout: rhinocutout, caption: "Rhinos remember every path", captionTop: '13.5%', captionLeft: '50%' },
  { bg: elephantbg, cutout: elephantcutout, caption: "We remember when this land was ours", captionTop: '13.5%', captionLeft: '50%' },
  { bg: deerbg, cutout: deercutout, caption: "The forest watches back", captionTop: '13.5%', captionLeft: '50%' },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const onNextClick = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const onPrevClick = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  return (
    <div className={styles.l1}>
      <div className={styles.bgLayer}>
        <img className={styles.bgBlur} src={slide.bg} alt="" />
        <img className={styles.bgCutout} src={slide.cutout} alt="" />
      </div>

      <img
        className={styles.arrowPrev}
        src={nextArrowIcon}
        style={{ transform: 'scaleX(-1)' }}
        onClick={onPrevClick}
        alt="Previous"
      />
      <img
        className={styles.arrowNext}
        src={nextArrowIcon}
        onClick={onNextClick}
        alt="Next"
      />

      <div className={styles.contentStack}>
        <nav className={styles.navPill}>
          <span className={`${styles.navItem} ${styles.navActive}`}>HOME</span>
          <span className={styles.navItem}>ABOUT</span>
          <span className={styles.navItem}>CONTACT</span>
        </nav>

        <div
        className={styles.captionWrap}
        style={{ top: slide.captionTop, left: slide.captionLeft }}
        >
          <div className={styles.caption}>{slide.caption}</div>
          <div className={styles.thoughtDots}>
            <img src={thoughtDot} alt="" className={styles.dotSmall} />
            <img src={thoughtDot2} alt="" className={styles.dotSmaller} />
            </div>
        </div>

        <div className={styles.spacer} />

        <button className={styles.beginBtn}>
          LET'S BEGIN
          <img src={beginArrowIcon} alt="" className={styles.beginArrow} />
        </button>
      </div>
    </div>
  );
};

export default Hero;