import { React, Component } from "react";
import s from "./App.module.css";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = (e) => {
    const name = e.target.innerHTML.toLowerCase();
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const result = (good / this.countTotalFeedback()) * 100;
    if (!result) {
      return 0;
    }
    return Math.floor(result);
  };

  render() {
    return (
      <div className={s.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options="Good"
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <FeedbackOptions
            options="Neutral"
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <FeedbackOptions
            options="Bad"
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
