import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParkCard from './ParkCard';
import styles from './ParkSelect.module.css';

import kazirangaImg from '../../assets/kaziranga.png';
import periyarImg from '../../assets/periyar.png';
import eravikulamImg from '../../assets/eravikulam.png';
import dachigamImg from '../../assets/dachigam.png';
import hemisImg from '../../assets/hemis.png';
import bandipurImg from '../../assets/bandipur.png';
import ranthamboreImg from '../../assets/ranthambore.png';
import girImg from '../../assets/gir.png';
import penchImg from '../../assets/pench.png';
import sundarbansImg from '../../assets/sundarbans.png';
import kanhaImg from '../../assets/kanha.png';
import manasImg from '../../assets/manas.png';

// isAvailable: true only for Kaziranga — this is your one fully-built park
// for the hackathon MVP. Every other park is a design mockup for now.
const PARKS_DATA = [
  { id: 'kaziranga', name: 'Kaziranga National Park', location: 'Assam', image: kazirangaImg, isAvailable: true },
  { id: 'periyar', name: 'Periyar National Park', location: 'Kerala', image: periyarImg, isAvailable: false },
  { id: 'eravikulam', name: 'Eravikulam National Park', location: 'Kerala', image: eravikulamImg, isAvailable: false },
  { id: 'dachigam', name: 'Dachigam National Park', location: 'Jammu and Kashmir', image: dachigamImg, isAvailable: false },
  { id: 'hemis', name: 'Hemis National Park', location: 'Ladakh', image: hemisImg, isAvailable: false },
  { id: 'bandipur', name: 'Bandipur National Park', location: 'Karnataka', image: bandipurImg, isAvailable: false },
  { id: 'ranthambore', name: 'Ranthambore National Park', location: 'Rajasthan', image: ranthamboreImg, isAvailable: false },
  { id: 'gir', name: 'Gir National Park', location: 'Gujarat', image: girImg, isAvailable: false },
  { id: 'pench', name: 'Pench National Park', location: 'Madhya Pradesh', image: penchImg, isAvailable: false },
  { id: 'sundarbans', name: 'Sundarbans National Park', location: 'West Bengal', image: sundarbansImg, isAvailable: false },
  { id: 'kanha', name: 'Kanha National Park', location: 'Madhya Pradesh', image: kanhaImg, isAvailable: false },
  { id: 'manas', name: 'Manas National Park', location: 'Assam', image: manasImg, isAvailable: false },
];

export default function ParkSelect({ onSelectPark }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredParks = PARKS_DATA.filter(
    (park) =>
      park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      park.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      className={styles.parkSelectContainer}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Which forest are you watching today?</h1>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.filterBtn}>filter</button>
        </div>
      </div>

      <div className={styles.gridScrollArea}>
        <div className={styles.parksGrid}>
          {filteredParks.map((park) => (
            <ParkCard
              key={park.id}
              name={park.name}
              location={park.location}
              image={park.image}
              isAvailable={park.isAvailable}
              onClick={() => onSelectPark && onSelectPark(park)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}