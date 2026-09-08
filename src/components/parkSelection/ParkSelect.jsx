import React from 'react';
import { motion } from 'framer-motion';
import ParkCard from './ParkCard';
import styles from './ParkSelect.module.css';

// Importing assets matching your assets folder structure
import kazirangaImg from '../../assets/kaziranga.png';
import periyarImg from '../../assets/periyar.png';
import eravikulamImg from '../../assets/eravikulam.png';
import dachigamImg from '../../assets/dachigam.png';
import hemisImg from '../../assets/hemis.png';
import bandipurImg from '../../assets/bandipur.png';

const PARKS_DATA = [
  { id: 'kaziranga', name: 'Kaziranga National Park', location: 'Assam', image: kazirangaImg },
  { id: 'periyar', name: 'Periyar National Park', location: 'Kerala', image: periyarImg },
  { id: 'eravikulam', name: 'Eravikulam National Park', location: 'Kerala', image: eravikulamImg },
  { id: 'dachigam', name: 'Dachigam National Park', location: 'Jammu and Kashmir', image: dachigamImg },
  { id: 'hemis', name: 'Hemis National Park', location: 'Ladakh', image: hemisImg },
  { id: 'bandipur', name: 'Bandipur National Park', location: 'Karnataka', image: bandipurImg },
];

export default function ParkSelect({ onSelectPark }) {
  return (
    <motion.div 
      className={styles.parkSelectContainer}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Which forest are you watching today?</h1>
        <h2 className={styles.subtitle}>SELECT A NATIONAL PARK</h2>
      </div>

      {/* Scrollable Container with Custom Figma Scrollbar */}
      <div className={styles.gridScrollArea}>
        <div className={styles.parksGrid}>
          {PARKS_DATA.map((park) => (
            <ParkCard
              key={park.id}
              name={park.name}
              location={park.location}
              image={park.image}
              onClick={() => onSelectPark && onSelectPark(park)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}