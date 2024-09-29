import React from 'react';
import Section from '../Section/Section';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import { FiDatabase } from 'react-icons/fi';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

componentDidMount() {
  const savedFeedback = JSON.parse(localStorage.getItem('feedback')) ?? {};
 
  this.setState({
    good: savedFeedback.good ?? 0,
    neutral: savedFeedback.neutral ?? 0,
    bad: savedFeedback.bad ?? 0,
  });
}

updateFeedback = (feedbackType) => {
  this.setState((prevState) => {
    const updatedState = {
      [feedbackType]: prevState[feedbackType] + 1,
    };
  
    localStorage.setItem('feedback', JSON.stringify({ ...prevState, ...updatedState }));
      
      return updatedState;
  });
};

  handleReset = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    },
    () => {
      localStorage.removeItem('feedback');
    })
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return (
    <Section>
	    <Description />
		    
      <Feedback
        handleGood={() => this.updateFeedback('good')}
        handleNeutral={() => this.updateFeedback('neutral')}
        handleBad={() => this.updateFeedback('bad')}
	    />
		
      {totalFeedback !== 0 ?
        <Options
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          totalFeedback={totalFeedback}
          handleReset={this.handleReset}
        /> : <Notification />
      }
    </Section>
    );
  }
}