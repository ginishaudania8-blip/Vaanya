import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import MapView from '../components/dashboard/MapView.jsx';
import AISummaryCard from '../components/dashboard/AISummaryCard.jsx';
import ReportStats from '../components/dashboard/ReportStats.jsx';
import MapLegend from '../components/dashboard/Maplegend.jsx';
import { useAuth } from '../hooks/useAuth.js';

const Dashboard = () => {
  const navigate = useNavigate();
  const { role, logout } = useAuth();

  const [activeLayers, setActiveLayers] = useState({
    floodRisk: true,
    eszBoundary: false,
    poachingReports: false,
  });
  const [showAISummary, setShowAISummary] = useState(false);

  const toggleLayer = (layerName) => {
    setActiveLayers((prev) => ({ ...prev, [layerName]: !prev[layerName] }));
  };

  const handleAuthAction = () => {
    if (role) {
      logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.topRow}>
          <button className={styles.backBtn} onClick={() => navigate('/park-selection')}>←</button>
          <span className={styles.logo}>VAANYA</span>
        </div>

        <div className={styles.filterPill}>
          <span className={styles.filterText}>Select filters</span>
          <svg className={styles.filterIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14" />
            <line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" />
            <line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="17" y1="16" x2="23" y2="16" />
          </svg>
        </div>

        <div className={styles.layerSection}>
          <h2 className={styles.sectionHeader}>Map View</h2>
          
          <nav className={styles.layerList}>
            <div
              className={`${styles.layerItem} ${activeLayers.eszBoundary ? styles.active : ''}`}
              onClick={() => toggleLayer('eszBoundary')}
            >
              <span className={`${styles.checkbox} ${activeLayers.eszBoundary ? styles.checked : ''}`}>
                {activeLayers.eszBoundary && '✓'}
              </span>
              <span>ESZ boundary</span>
            </div>

            <div
              className={`${styles.layerItem} ${activeLayers.floodRisk ? styles.active : ''}`}
              onClick={() => toggleLayer('floodRisk')}
            >
              <span className={`${styles.checkbox} ${activeLayers.floodRisk ? styles.checked : ''}`}>
                {activeLayers.floodRisk && '✓'}
              </span>
              <span>Flood risk</span>
            </div>

            {/* Poaching Reports layer (visible only when logged in) */}
            {role && (
              <div
                className={`${styles.layerItem} ${activeLayers.poachingReports ? styles.active : ''}`}
                onClick={() => toggleLayer('poachingReports')}
              >
                <span className={`${styles.checkbox} ${activeLayers.poachingReports ? styles.checked : ''}`}>
                  {activeLayers.poachingReports && '✓'}
                </span>
                <span>Poaching Reports</span>
              </div>
            )}
          </nav>

          <button className={styles.aiSummaryButton} onClick={() => setShowAISummary(!showAISummary)}>
            AI SUMMARY
          </button>
        </div>
      </aside>

      <main className={styles.mapArea}>
        <button className={styles.loginBtn} onClick={handleAuthAction}>
          {role ? 'LOGOUT' : 'LOGIN'}
        </button>

        <MapView activeLayers={activeLayers} userRole={role} />

        {/* Floating Map Legend overlaid on bottom right when flood risk is enabled */}
        <MapLegend showFlood={activeLayers.floodRisk} showEsz={activeLayers.eszBoundary} />
        {showAISummary && <AISummaryCard onClose={() => setShowAISummary(false)} />}

        {/* Floating poaching report stats, bottom-left — only when the layer is on and logged in */}
        {activeLayers.poachingReports && role && <ReportStats />}
      </main>
    </div>
  );
};

export default Dashboard;