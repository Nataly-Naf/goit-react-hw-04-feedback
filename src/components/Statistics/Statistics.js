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
        <li>Good: {feedback[0]}</li>
        <li>Neutral:{feedback[1]}</li>
        <li>Bad: {feedback[2]} </li>
        <li>Total: {onCountTotal()} </li>
        <li>PositiveFeedback: {onCountPositive()}% </li>
      </ul>
    </div>
  );
};
