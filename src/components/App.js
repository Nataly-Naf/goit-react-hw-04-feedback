import { Component } from "react";
import { FeedbackList } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad:0
  }
 
  changeStatistics = (type) => {
    return this.setState(prevState => ({
      [type]: prevState[type]+1
    }))
  }

   countTotalFeedback = () => {
   let totalFeedback = this.state.good + this.state.neutral + this.state.bad;
  return totalFeedback
  }

  countPositive = () => {
    const positivePercent = this.state.good*100 / this.countTotalFeedback();
    return Math.ceil(positivePercent)
  }

  render() {
    return <div>
      <h1>Leave your feedback</h1>
      <FeedbackList onChangeFeedback={this.changeStatistics} options={Object.keys(this.state)}   
      />
      
      <Statistics feedback={this.state} onCountTotal={this.countTotalFeedback}
        onCountPositive={ this.countPositive} />
       
    </div>
 }
};
