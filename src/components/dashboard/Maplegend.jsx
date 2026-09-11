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

const MapLegend = () => {
  const legendItems = [
    { label: 'Danger Zone', color: '#e04b4b' },
    { label: 'Warning Zone', color: '#f2c14e' },
    { label: 'Normal / Safe', color: '#2ecc8f' },
  ];

  return (
    <div style={styles.legendContainer}>
      <h4 style={styles.title}>Flood Risk Levels</h4>
      {legendItems.map((item) => (
        <div key={item.label} style={styles.legendItem}>
          <span style={{ ...styles.badge, backgroundColor: item.color }} />
          <span style={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default MapLegend;