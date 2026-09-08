import React from 'react';
import { motion } from 'framer-motion';
import styles from './contact.module.css';

import contactBg from '../../assets/aboutcontactbg.png';

export default function Contact() {
  return (
    <div className={styles.contactWrapper}>
      {/* Background Image Layer */}
      <img src={contactBg} alt="Forest Background" className={styles.bgImage} />

      {/* Glass Content Card */}
      <motion.div 
        className={styles.contactCard}
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        <h2 className={styles.heading}>Get in Touch</h2>

        <p className={styles.subtext}>
          Have something to report, a question, or want to collaborate? We'd love to hear from you.
        </p>

        <a href="mailto:demo@vaanya-app.dev" className={styles.emailLink}>
          demo@vaanya-app.dev
        </a>

        <hr className={styles.divider} />

        <p className={styles.footerText}>
          Built by Aayushi & Ginisha for AnimalHack 2026
        </p>
      </motion.div>
    </div>
  );
}
