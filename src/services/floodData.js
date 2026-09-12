// Hardcoded sample based on real CWC Neamatighat gauge bulletins (Brahmaputra, Jorhat district, Assam).
// Fixed snapshot for demo purposes — not a live feed.

export const WARNING_LEVEL = 84.54; // meters
export const DANGER_LEVEL = 85.54;  // meters
export const PREVIOUS_HFL = 87.37;  // meters — historical highest flood level at this station

export const floodReadings = [
  { date: '2026-08-25', level: 83.9,  trend: 'rising'  },
  { date: '2026-08-26', level: 84.3,  trend: 'rising'  },
  { date: '2026-08-27', level: 84.71, trend: 'rising'  },
  { date: '2026-08-28', level: 85.02, trend: 'rising'  },
  { date: '2026-08-29', level: 85.59, trend: 'falling' },
  { date: '2026-08-30', level: 85.20, trend: 'falling' },
];

export function getLatestReading() {
  return floodReadings[floodReadings.length - 1];
}

export function getFloodStatus(level = getLatestReading().level) {
  if (level >= DANGER_LEVEL) return 'danger';
  if (level >= WARNING_LEVEL) return 'warning';
  return 'normal';
}