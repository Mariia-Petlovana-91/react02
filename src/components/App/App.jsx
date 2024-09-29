import React from 'react';
import Section from '../Section/Section';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import css from '../App/App.module.css';
import { FiDatabase } from 'react-icons/fi';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    return (
      <Section>
	  <Description />
		    
        <Feedback
          handleGood={() => this.updateFeedback('good')}
          handleNeutral={() => this.updateFeedback('neutral')}
          handleBad={() => this.updateFeedback('bad')}
	  />
		    
        <Options
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
	  />

	 <Notification />
      </Section>
    );
  }
}