import styles from './PoachingSummaryCard.module.css';
import { usePoachingReports } from '../../hooks/usePoachingReports';

const CATEGORY_LABELS = {
  poaching: 'Poaching',
  suspicious_activity: 'Suspicious activity',
  wildlife_conflict: 'Wildlife conflict',
};

const PoachingSummaryCard = () => {
  const reports = usePoachingReports(true); // precise=true — ranger/NGO view only

  if (!reports || reports.length === 0) return null;

  const counts = reports.reduce((acc, report) => {
    acc[report.category] = (acc[report.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className={styles.card}>
      <div className={styles.header}>{reports.length} report{reports.length !== 1 ? 's' : ''} this week</div>
      <ul className={styles.list}>
        {Object.entries(counts).map(([category, count]) => (
          <li key={category}>
            {CATEGORY_LABELS[category] || category}: <strong>{count}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PoachingSummaryCard;