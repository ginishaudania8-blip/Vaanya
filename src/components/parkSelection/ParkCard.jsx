import React from 'react';
import styles from './ParkCard.module.css';

export default function ParkCard({ name, location, image, onClick, isAvailable = false }) {
  const handleClick = () => {
    if (isAvailable && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`${styles.card} ${!isAvailable ? styles.comingSoon : ''}`}
      onClick={handleClick}
    >
      <div className={styles.textWrapper}>
        <h3 className={styles.parkName}>{name}</h3>
        <p className={styles.parkLocation}>{location}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.parkImage} />
        {!isAvailable && <div className={styles.badge}>Coming soon</div>}
      </div>
    </div>
  );
}