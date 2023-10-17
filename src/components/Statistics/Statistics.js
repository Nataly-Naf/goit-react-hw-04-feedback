import { NoFeedbackNotification } from 'components/NoFeedbackNotification/NoFeedbackNotification';
import styles from './Statistics.module.css';
export const Statistics = ({ feedback, onCountTotal, onCountPositive }) => {
  const total = onCountTotal();
  if (total === 0) {
    return <NoFeedbackNotification />;
  }
  return (
    <div>
      <h2>Statistics</h2>

      <ul className={styles.statList}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad} </li>
        <li>Total: {onCountTotal()} </li>
        <li>PositiveFeedback: {onCountPositive()}% </li>
      </ul>
    </div>
  );
};
