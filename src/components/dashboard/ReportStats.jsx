import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const ReportStats = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    if (!db) return;
    const q = query(collection(db, 'reports'), where('category', '==', 'poaching'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setReports(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, []);

  if (reports.length === 0) return null;

  const byCategory = reports.reduce((acc, report) => {
    acc[report.category] = (acc[report.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{
      position: 'absolute',
      bottom: '220px',
      left: '24px',
      zIndex: 1000,
      backgroundColor: 'rgba(245, 26, 26, 0.33)',
      border: '1px solidrgb(236, 53, 53)',
      borderRadius: '12px',
      padding: '14px 18px',
      color: '#000000',
      maxWidth: '260px',
    }}>
      <strong>{reports.length} reports this week</strong>
      <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0' }}>
        {Object.entries(byCategory).map(([category, count]) => (
          <li key={category}>{category}: {count}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReportStats;