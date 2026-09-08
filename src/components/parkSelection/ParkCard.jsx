import React from 'react';
import styles from './ParkSelect.module.css';

export default function ParkCard({ name, location, image, onClick }) {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.cardHeader}>
        <h3 className={styles.parkName}>{name}</h3>
        <span className={styles.parkLocation}>{location}</span>
      </div>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.parkImage} />
      </div>
    </div>
  );
}