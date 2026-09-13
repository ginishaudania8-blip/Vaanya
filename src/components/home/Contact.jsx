import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar.jsx';
import styles from './Contact.module.css';

import contactBg from '../../assets/aboutcontactbg.png';

export default function Contact() {
  return (
    <div className={styles.contactWrapper}>
      <header style={{ position: 'absolute', top: '24px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 50}}>
        <Navbar />
      </header>

      <img src={contactBg} alt="Forest Background" className={styles.bgImage} />

      <motion.div 
        className={styles.contactCard}
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        <h2 className={styles.heading}>Get in Touch</h2>

        <p className={styles.subtext}>
          Have a wildlife concern to report, or interested in partnering with Vaanya as an NGO, researcher, or park authority? We'd love to hear from you.
        </p>

        <a href="mailto:ginishaudania8@gmail.com" className={styles.emailLink}>
          ginishaudania8@gmail.com
        </a>

        <hr className={styles.divider} />

        <p className={styles.footerText}>
          For emergencies or immediate threats to wildlife, please contact your local forest department directly. Vaanya is a monitoring platform and does not replace official emergency services.
        </p>

        <p className={styles.footerText}>
          Built by Aayushi & Ginisha for AnimalHack 2026 — starting with Kaziranga National Park.
        </p>
      </motion.div>
    </div>
  );
}