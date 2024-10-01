import React, { useState, useEffect } from 'react';
import Section from '../Section/Section';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 };
    setState(savedFeedback);
  }, []);

  const updateFeedback = (feedbackType) => {
    setState((prevState) => {
      const updatedState = {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1
      };

      saveFeedback(updatedState.good, updatedState.neutral, updatedState.bad);
      return updatedState;
    });
  };

  const saveFeedback = (good, neutral, bad) => {
    localStorage.setItem('feedback', JSON.stringify({ good, neutral, bad }));
  };

  const handleReset = () => {
    setState({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem('feedback');
  };

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;

  return (
    <Section>
      <Description total={totalFeedback} good={good} />

      <Options
        handleGood={() => updateFeedback('good')}
        handleNeutral={() => updateFeedback('neutral')}
        handleBad={() => updateFeedback('bad')}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />

      {totalFeedback !== 0 ? (
        <Feedback good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </Section>
  );
};

export default App;