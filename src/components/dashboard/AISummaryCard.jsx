import { useState, useEffect, useCallback } from 'react';
import styles from './AISummaryCard.module.css';
import { getAISummary } from '../../services/gemini';
import { getLatestReading, getFloodStatus } from '../../services/floodData';
import { usePoachingReports } from '../../hooks/usePoachingReports';

const AISummaryCard = ({ onClose }) => {
  const [summary, setSummary] = useState('Loading summary...');
  const reports = usePoachingReports();

  const refreshSummary = useCallback(async () => {
    setSummary('Loading summary...');
    const latest = getLatestReading();
    const text = await getAISummary({
      floodStatus: getFloodStatus(latest.level),
      floodLevel: latest.level,
      eszStatus: 'Proposed reduction from 10km to 1km under review (Aug 2026)',
      reportCount: reports.length,
    });
    setSummary(text);
  }, [reports.length]);

  useEffect(() => {
    refreshSummary();
  }, [refreshSummary]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>⚠ AI RISK SUMMARY</span>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
      </div>
      <p className={styles.body}>{summary}</p>
      <button className={styles.refreshBtn} onClick={refreshSummary}>Refresh Summary</button>
    </div>
  );
};

export default AISummaryCard;