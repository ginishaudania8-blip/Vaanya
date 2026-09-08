import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RangerLogin.module.css';
import loginBg from '../assets/loginbg.png';

export default function RangerLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    console.log('Logging in with:', { email, password });
    navigate('/dashboard');
  };

  return (
    <main className={styles.loginWrapper}>
      <div className={styles.frameContainer}>
        {/* Background Image */}
        <img src={loginBg} alt="Login Background" className={styles.bgImage} />

        {/* Top Navigation Pill Header */}
        <nav className={styles.navBar}>
          <button className={styles.navLink} onClick={() => navigate('/')}>
            HOME
          </button>
          <button className={styles.navLink} onClick={() => navigate('/')}>
            ABOUT
          </button>
          <button className={styles.navLink} onClick={() => navigate('/')}>
            CONTACT
          </button>
        </nav>

        {/* Center Glassmorphism Login Card */}
        <div className={styles.loginCard}>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              LOGIN
            </button>

            <button
              type="button"
              className={styles.backButton}
              onClick={() => navigate('/')}
            >
              &larr; Back to Home
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
