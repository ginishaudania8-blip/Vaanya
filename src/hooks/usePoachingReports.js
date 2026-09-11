import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';

export function usePoachingReports(precise) {
  const [reports, setReports] = useState([]);
  const [aggregate, setAggregate] = useState(null);

  useEffect(() => {
    if (!db) return;

    if (precise) {
      const q = query(collection(db, 'reports'), where('category', '==', 'poaching'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setReports(data);
      });
      return () => unsubscribe();
    } else {
      const summaryRef = doc(db, 'report_counts', 'summary');
      const unsubscribe = onSnapshot(summaryRef, (snap) => {
        setAggregate(snap.exists() ? snap.data() : null);
      });
      return () => unsubscribe();
    }
  }, [precise]);

  return precise ? reports : aggregate;
}