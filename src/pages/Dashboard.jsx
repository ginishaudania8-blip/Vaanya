import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import MapView from '../components/dashboard/MapView';
import AISummaryCard from '../components/dashboard/AISummaryCard';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const navigate = useNavigate();
  const { role } = useAuth();

  const [activeLayers, setActiveLayers] = useState({
    floodRisk: true,
    eszBoundary: false,
    poachingReports: false,
  });
  const [showAISummary, setShowAISummary] = useState(false);

  const toggleLayer = (layerName) => {
    setActiveLayers((prev) => ({ ...prev, [layerName]: !prev[layerName] }));
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.topRow}>
          <button className={styles.backBtn} onClick={() => navigate('/park-select')}>←</button>
          <span className={styles.logo}>VAANYA</span>
        </div>

        <input className={styles.filterInput} placeholder="Select filters" />

        <nav className={styles.layerList}>
          <div className={styles.layerItem}>Map view</div>
          <div
            className={`${styles.layerItem} ${activeLayers.eszBoundary ? styles.active : ''}`}
            onClick={() => toggleLayer('eszBoundary')}
          >
            ESZ boundary
          </div>
          <div
            className={`${styles.layerItem} ${activeLayers.floodRisk ? styles.active : ''}`}
            onClick={() => toggleLayer('floodRisk')}
          >
            Flood risk
          </div>
          <div
            className={`${styles.layerItem} ${activeLayers.poachingReports ? styles.active : ''}`}
            onClick={() => toggleLayer('poachingReports')}
          >
            Poaching Reports
          </div>
        </nav>

        <button className={styles.aiSummaryButton} onClick={() => setShowAISummary(!showAISummary)}>
          AI SUMMARY
        </button>
      </aside>

      <main className={styles.mapArea}>
        <button className={styles.loginBtn} onClick={() => navigate('/login')}>
          {role ? role.toUpperCase() : 'LOGIN'}
        </button>
        <MapView activeLayers={activeLayers} userRole={role} />
        {showAISummary && <AISummaryCard onClose={() => setShowAISummary(false)} />}
      </main>
    </div>
  );
};

export default Dashboard;