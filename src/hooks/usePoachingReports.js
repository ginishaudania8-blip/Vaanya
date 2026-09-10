import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

// Rough named zones for the public "aggregate" view.
// Adjust these coordinates once you know your seeded reports' actual spread.
const ZONES = [
  { name: 'Eastern Range', lat: 26.62, lng: 93.35 },
  { name: 'Central Range', lat: 26.58, lng: 93.17 },
  { name: 'Western Range', lat: 26.55, lng: 93.02 },
];

function nearestZone(lat, lng) {
  let closest = ZONES[0];
  let minDist = Infinity;
  ZONES.forEach((zone) => {
    const dist = Math.hypot(zone.lat - lat, zone.lng - lng);
    if (dist < minDist) {
      minDist = dist;
      closest = zone;
    }
  });
  return closest;
}

export function usePoachingReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    if (!db) return;

    const q = query(collection(db, 'reports'), where('category', '==', 'poaching'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReports(data);
    });

    return () => unsubscribe();
  }, []);

  return reports;
}

export function groupReportsByZone(reports) {
  const counts = {};
  reports.forEach((report) => {
    const zone = nearestZone(report.lat, report.lng);
    if (!counts[zone.name]) {
      counts[zone.name] = { name: zone.name, centerCoords: [zone.lat, zone.lng], count: 0 };
    }
    counts[zone.name].count += 1;
  });
  return Object.values(counts);
}