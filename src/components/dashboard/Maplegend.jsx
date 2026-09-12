import React from 'react';

const styles = {
  legendContainer: {
    position: 'absolute',
    bottom: '24px',
    right: '24px',
    zIndex: 1000,
    backgroundColor: 'rgba(9, 13, 22, 0.85)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: '#ffffff',
    fontSize: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
    pointerEvents: 'auto',
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '13px',
    fontWeight: '600',
    color: '#ffffff',
  },
  section: {
    marginBottom: '12px',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '6px',
  },
  badge: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  label: {
    color: '#cbd5e1',
  },
};

const floodLegendItems = [
  { label: 'Danger Zone', color: '#e04b4b' },
  { label: 'Warning Zone', color: '#f2c14e' },
  { label: 'Normal / Safe', color: '#2ecc8f' },
];

const eszLegendItems = [
  { label: 'Current ESZ — 10km buffer', color: '#3b82f6' },
  { label: 'Proposed ESZ — 1km buffer', color: '#ef4444' },
];

const MapLegend = ({ showFlood = false, showEsz = false }) => {
  if (!showFlood && !showEsz) return null;

  return (
    <div style={styles.legendContainer}>
      {showFlood && (
        <div style={styles.section}>
          <h4 style={styles.title}>Flood Risk Levels</h4>
          {floodLegendItems.map((item) => (
            <div key={item.label} style={styles.legendItem}>
              <span style={{ ...styles.badge, backgroundColor: item.color }} />
              <span style={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      )}

      {showEsz && (
        <div style={styles.section}>
          <h4 style={styles.title}>ESZ Boundary</h4>
          {eszLegendItems.map((item) => (
            <div key={item.label} style={styles.legendItem}>
              <span style={{ ...styles.badge, backgroundColor: item.color }} />
              <span style={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapLegend;