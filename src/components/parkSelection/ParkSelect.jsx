import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParkCard from './ParkCard';
import styles from './ParkSelect.module.css';
import searchIcon from '../../assets/searchicon.png';

// Dynamic image resolver for PNG files in src/assets/
const getAssetUrl = (fileName) => {
  return new URL(`../../assets/${fileName}`, import.meta.url).href;
};

const PARKS_DATA = [
  { id: 1, name: 'Kaziranga National Park', state: 'Assam', image: getAssetUrl('kaziranga.png') },
  { id: 2, name: 'Periyar National Park', state: 'Kerala', image: getAssetUrl('periyar.png') },
  { id: 3, name: 'Eravikulam National Park', state: 'Kerala', image: getAssetUrl('eravikulam.png') },
  { id: 4, name: 'Dachigam National Park', state: 'Jammu and Kashmir', image: getAssetUrl('dachigam.png') },
  { id: 5, name: 'Hemis National Park', state: 'Ladakh', image: getAssetUrl('hemis.png') },
  { id: 6, name: 'Bandipur National Park', state: 'Karnataka', image: getAssetUrl('bandipur.png') },
  { id: 7, name: 'Ranthambore National Park', state: 'Rajasthan', image: getAssetUrl('ranthambore.png') },
  { id: 8, name: 'Gir National Park', state: 'Gujarat', image: getAssetUrl('gir.png') },
  { id: 9, name: 'Pench National Park', state: 'Madhya Pradesh', image: getAssetUrl('pench.png') },
  { id: 10, name: 'Sundarbans National Park', state: 'West Bengal', image: getAssetUrl('sundarbans.png') },
  { id: 11, name: 'Kanha National Park', state: 'Madhya Pradesh', image: getAssetUrl('kanha.png') },
  { id: 12, name: 'Manas National Park', state: 'Assam', image: getAssetUrl('manas.png') },
];

export default function ParkSelect() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredParks = PARKS_DATA.filter(
    (park) =>
      park.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      park.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleParkClick = (park) => {
    if (park.name.toLowerCase().includes('kaziranga')) {
      navigate('/dashboard');
    }
  };

  return (
    <div className={styles.container}>
      {/* Sticky Top Header Section */}
      <div className={styles.stickyHeader}>
        <header className={styles.header}>
          <div className={styles.navPill}>
            <button className={styles.navLink} onClick={() => navigate('/')}>HOME</button>
            <button className={styles.navLink} onClick={() => navigate('/about')}>ABOUT</button>
            <button className={styles.navLink} onClick={() => navigate('/contact')}>CONTACT</button>
          </div>
          <button className={styles.loginBtn} onClick={() => navigate('/login')}>LOGIN</button>
        </header>

        <h1 className={styles.heading}>Which forest are you watching today?</h1>

        {/* Search Bar */}
        <div className={styles.searchWrapper}>
          <img src={searchIcon} alt="Search" className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Scrollable Main Content Grid */}
      <main className={styles.scrollContent}>
        <div className={styles.grid}>
          {filteredParks.map((park) => {
            const isKaziranga = park.name.toLowerCase().includes('kaziranga');
            return (
              <ParkCard
                key={park.id}
                name={park.name}
                state={park.state}
                image={park.image}
                isAvailable={isKaziranga}
                onClick={() => handleParkClick(park)}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}