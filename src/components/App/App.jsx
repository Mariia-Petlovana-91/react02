import React, { useState, useEffect } from 'react';
import Section from '../Section/Section';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback')) || {};
    setGood(savedFeedback.good || 0);
    setNeutral(savedFeedback.neutral || 0);
    setBad(savedFeedback.bad || 0);
  }, []);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === 'good') {
      setGood((prevGood) => {
        const updatedGood = prevGood + 1;
        saveFeedback(updatedGood, neutral, bad);
        return updatedGood;
      });
    } else if (feedbackType === 'neutral') {
      setNeutral((prevNeutral) => {
        const updatedNeutral = prevNeutral + 1;
        saveFeedback(good, updatedNeutral, bad);
        return updatedNeutral;
      });
    } else if (feedbackType === 'bad') {
      setBad((prevBad) => {
        const updatedBad = prevBad + 1;
        saveFeedback(good, neutral, updatedBad);
        return updatedBad;
      });
    }
  };

  const saveFeedback = (good, neutral, bad) => {
    localStorage.setItem('feedback', JSON.stringify({ good, neutral, bad }));
  };

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    localStorage.removeItem('feedback');
  };

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