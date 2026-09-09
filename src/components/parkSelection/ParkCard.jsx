import React from 'react';
import styles from './ParkCard.module.css';

export default function ParkCard({ name, location, image, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.textWrapper}>
        <h3 className={styles.parkName}>{name}</h3>
        <p className={styles.parkLocation}>{location}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.parkImage} />
      </div>
    </div>
  );
}