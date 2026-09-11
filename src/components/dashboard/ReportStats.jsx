import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const ReportStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!db) return;
    const ref = doc(db, 'report_counts', 'summary');
    const unsubscribe = onSnapshot(ref, (snap) => {
      setStats(snap.exists() ? snap.data() : null);
    });
    return () => unsubscribe();
  }, []);

  if (!stats) return null;

  return (
    <div>
      <strong>{stats.total} reports this week</strong>
      <ul>
        {Object.entries(stats.byCategory).map(([category, count]) => (
          <li key={category}>{category}: {count}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReportStats;