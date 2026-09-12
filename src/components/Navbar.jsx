import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './home/Home.module.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.navBar}>
      <button 
        className={location.pathname === '/' ? styles.activeNavLink : styles.navLink} 
        onClick={() => navigate('/')}
      >
        HOME
      </button>
      <button 
        className={location.pathname === '/about' ? styles.activeNavLink : styles.navLink} 
        onClick={() => navigate('/about')}
      >
        ABOUT
      </button>
      <button 
        className={location.pathname === '/contact' ? styles.activeNavLink : styles.navLink} 
        onClick={() => navigate('/contact')}
      >
        CONTACT
      </button>
    </div>
  );
}