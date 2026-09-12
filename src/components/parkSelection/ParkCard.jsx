import React from 'react';
import styles from './ParkCard.module.css';

export default function ParkCard({ name, state, image, isAvailable, onClick }) {
  return (
    <div 
      className={`${styles.card} ${!isAvailable ? styles.disabledCard : ''}`}
      onClick={isAvailable ? onClick : undefined}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{name}</h3>
        <span className={styles.subtitle}>{state}</span>
      </div>

      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />

        {/* Overlay Badge for non-Kaziranga Parks */}
        {!isAvailable && (
          <div className={styles.comingSoonOverlay}>
            <span className={styles.comingSoonBadge}>COMING SOON</span>
          </div>
        )}
      </div>
    </div>
  );
}