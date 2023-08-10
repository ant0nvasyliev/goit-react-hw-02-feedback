import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Wrapper } from "./App.styled";
import { Notification } from "./Notification/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddStats = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  // countTotalFeedback = total => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // }


  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions handleAddStats={this.handleAddStats} />
          
        </Section>
        <Section title="Statistics">
        {/* totalFeedback={this.countTotalFeedback} */}
          <Statistics feedbackScore={this.state} />
          
        </Section>
      </Wrapper>
    )
  }
};