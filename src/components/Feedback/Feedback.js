import styles from './Feedback.module.css'
import { nanoid } from 'nanoid';

export const FeedbackList = ({ onChangeFeedback, options }) => {
    return <ul className={styles.buttonList}>
        {options.map(option => {
            return <li key={nanoid()}><button onClick={() => { onChangeFeedback(option)} } className={styles.button}>{option.toUpperCase()}</button></li>
        })}
        
    </ul>
}

