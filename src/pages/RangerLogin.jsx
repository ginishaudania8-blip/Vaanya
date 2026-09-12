import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';
import { useAuth } from '../hooks/useAuth.js';
import styles from './RangerLogin.module.css';
import loginBg from '../assets/loginbg.png';

export default function RangerLogin() {
  const navigate = useNavigate();
  const { user, role, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // If someone's already logged in and lands here directly, skip the form
  if (!loading && user && role) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Custom validation logic to replace default browser popups
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Please fill out this field.';
    }
    if (!password) {
      newErrors.password = 'Please fill out this field.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!auth) {
      setErrors({ form: 'Firebase is not configured yet — check your .env file.' });
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // useAuth's onAuthStateChanged listener picks this up automatically
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password') {
        setErrors({ form: 'Incorrect email or password.' });
      } else if (err.code === 'auth/user-not-found') {
        setErrors({ form: 'No account found with that email.' });
      } else {
        setErrors({ form: 'Something went wrong. Please try again.' });
      }
    } finally {
      setSubmitting(false);
    }
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
          <form onSubmit={handleSubmit} className={styles.loginForm} noValidate>
            {errors.form && (
              <div className={styles.errorMessage}>
                <span className={styles.errorIcon}>!</span>
                {errors.form}
              </div>
            )}

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                }}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              />
              {errors.email && (
                <div className={styles.errorMessage}>
                  <span className={styles.errorIcon}>!</span>
                  {errors.email}
                </div>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.passwordWrapper}>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
                  }}
                  className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.17c0-1.66-1.34-3-3-3l-.17.02z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <div className={styles.errorMessage}>
                  <span className={styles.errorIcon}>!</span>
                  {errors.password}
                </div>
              )}
            </div>

            <button type="submit" className={styles.submitButton} disabled={submitting}>
              {submitting ? 'LOGGING IN...' : 'LOGIN'}
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