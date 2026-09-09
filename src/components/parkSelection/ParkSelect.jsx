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

const PARKS_DATA = [
  { id: 'kaziranga', name: 'Kaziranga National Park', location: 'Assam', image: kazirangaImg },
  { id: 'periyar', name: 'Periyar National Park', location: 'Kerala', image: periyarImg },
  { id: 'eravikulam', name: 'Eravikulam National Park', location: 'Kerala', image: eravikulamImg },
  { id: 'dachigam', name: 'Dachigam National Park', location: 'Jammu and Kashmir', image: dachigamImg },
  { id: 'hemis', name: 'Hemis National Park', location: 'Ladakh', image: hemisImg },
  { id: 'bandipur', name: 'Bandipur National Park', location: 'Karnataka', image: bandipurImg },
  { id: 'ranthambore', name: 'Ranthambore National Park', location: 'Rajasthan', image: ranthamboreImg },
  { id: 'gir', name: 'Gir National Park', location: 'Gujarat', image: girImg },
  { id: 'pench', name: 'Pench National Park', location: 'Madhya Pradesh', image: penchImg },
  { id: 'sundarbans', name: 'Sundarbans National Park', location: 'West Bengal', image: sundarbansImg },
  { id: 'kanha', name: 'Kanha National Park', location: 'Madhya Pradesh', image: kanhaImg },
  { id: 'manas', name: 'Manas National Park', location: 'Assam', image: manasImg },
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

        {/* Centered Search Bar */}
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

      {/* Scrollable Container */}
      <div className={styles.gridScrollArea}>
        <div className={styles.parksGrid}>
          {filteredParks.map((park) => (
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