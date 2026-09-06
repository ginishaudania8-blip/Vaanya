import { useCallback } from 'react';
import styles from './Hero.module.css';
import heroLionBg from '../../assets/lionbg.png';
import heroLionCutout from '../../assets/lioncutout.png';
import nextArrowIcon from '../../assets/icon-carousel-next.svg';
import beginArrowIcon from '../../assets/letsbeginarrow.svg';
import thoughtDot from '../../assets/icon-thughtdot.svg';
import thoughtDot2 from '../../assets/icon-thoughtdot2.svg';

const Hero = ({ backgroundImage, caption = "This is the only home he knows" }) => {
  const onAboutClick = useCallback(() => {}, []);
  const onContactClick = useCallback(() => {}, []);
  const onNextClick = useCallback(() => {}, []);
  const onPrevClick = useCallback(() => {}, []);

  return (
    <div className={styles.l1}>
      <div className={styles.lions16x91Parent}>
        <img className={styles.lions16x91Icon} src={backgroundImage || heroLionBg} alt="Lion pride at sunset" />
        <img className={styles.lions16x92Icon} src={heroLionCutout} alt="" />
      </div>

      <div className={styles.l1Child} />
      <div className={styles.l1Item} />
      <div className={styles.home}>HOME</div>
      <div className={styles.about} onClick={onAboutClick}>ABOUT</div>
      <div className={styles.contact} onClick={onContactClick}>CONTACT</div>

      <div className={styles.captionBubble}>
        <div className={styles.thisIsThe}>{caption}</div>
      </div>
      <div className={styles.thoughtDots}>
        <img src={thoughtDot} alt="" className={styles.dotSmall} />
        <img src={thoughtDot2} alt="" className={styles.dotSmaller} />
      </div>

      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.letsBegin}>LET'S BEGIN</b>
        <img className={styles.groupItem} src={beginArrowIcon} alt="" />
      </div>

      <img className={styles.groupIcon} src={nextArrowIcon} onClick={onNextClick} alt="Next" />
      <img className={styles.l1Child2} src={nextArrowIcon} style={{ transform: 'scaleX(-1)' }} onClick={onPrevClick} alt="Previous" />
    </div>
  );
};

export default Hero;