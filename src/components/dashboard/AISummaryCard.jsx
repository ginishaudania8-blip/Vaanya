import { useState, useEffect, useCallback } from 'react';
import styles from './AISummaryCard.module.css';
import { getAISummary } from '../../services/geminiSummary';
import { getLatestReading, getFloodStatus } from '../../services/floodData';
import { usePoachingReports } from '../../hooks/usePoachingReports';

const CORRIDOR_FACT = 'Elephant and rhino corridor connects Kaziranga to the Karbi Anglong hills to the south, used seasonally — especially during floods when animals move to higher ground.';

const AISummaryCard = ({ onClose }) => {
  const [summary, setSummary] = useState('HEADLINE: Loading...\n');
  const aggregate = usePoachingReports(false); // aggregate mode: { total, byCategory } or null

  const refreshSummary = useCallback(async () => {
    setSummary('HEADLINE: Loading...\n');
    const latest = getLatestReading();
    const text = await getAISummary({
      floodStatus: getFloodStatus(latest.level),
      floodLevel: latest.level,
      eszStatus: 'Proposed reduction from 10km to 1km under review (Aug 2026)',
      corridorFact: CORRIDOR_FACT,
      reportCount: aggregate?.total ?? 0,
    });
    setSummary(text);
  }, [aggregate]);

  useEffect(() => {
    refreshSummary();
  }, [refreshSummary]);

  const [headline, ...bullets] = summary.split('\n').filter(Boolean);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>⚠ AI RISK SUMMARY</span>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
      </div>
      <p className={styles.headline}>{headline?.replace('HEADLINE:', '').trim()}</p>
      <ul className={styles.bulletList}>
        {bullets.map((b, i) => (
          <li key={i}>{b.replace(/^-\s*/, '')}</li>
        ))}
      </ul>
      <button className={styles.refreshBtn} onClick={refreshSummary}>Refresh Summary</button>
    </div>
  );
};

export default AISummaryCard;