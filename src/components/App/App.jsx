import React, { useState, useEffect } from 'react';
import Section from '../Section/Section';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const App = () => {
  const getInitialState = () => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  };

  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(state));
  }, [state]);

  const updateFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  const handleReset = () => {
    const resetState = { good: 0, neutral: 0, bad: 0 };
    setState(resetState);
    localStorage.setItem('feedback', JSON.stringify(resetState));
  };

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;

  const positiveFeedback = Math.round((good  / totalFeedback) * 100  );

  return (
    <Section>
      <Description positiveTotal={positiveFeedback} />

      <Options
        handleGood={() => updateFeedback('good')}
        handleNeutral={() => updateFeedback('neutral')}
        handleBad={() => updateFeedback('bad')}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />

      {totalFeedback !== 0 ? (
        <Feedback good={good} neutral={neutral} bad={bad} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </Section>
  );
};

export default App;
