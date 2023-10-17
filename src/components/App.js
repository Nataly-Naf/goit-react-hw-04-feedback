import {  useState } from "react";
import { FeedbackList } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeStatistics = (type) => {
    if (type === "good") {
      return setGood(prevState=>prevState+1)
    }
    else
      if (type === "neutral") {
        setNeutral(prevState=>prevState+1)
      }
    else setBad (prevState=>prevState+1)
  }

  const countTotalFeedback = () => {
    let totalFeedback = good + neutral + bad;
    return totalFeedback
  }

  const countPositive = () => {
    const positivePercent = good*100 / countTotalFeedback();
    return Math.ceil(positivePercent)
  }
  return  <div>
      <h1>Leave your feedback</h1>
      <FeedbackList onChangeFeedback={changeStatistics} options={["good", "neutral", "bad"]}   
      />
      
      <Statistics feedback={[good, neutral, bad]} onCountTotal={countTotalFeedback}
        onCountPositive={countPositive} />
       
    </div>
 }
 
  

