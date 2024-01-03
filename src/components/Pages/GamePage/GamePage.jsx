import React, { useState } from 'react';
import WordCardCarousel from '../../WordCardCarousel/WordCardCarousel';
import styles from './GamePage.module.scss';

const GamePage = ({ words }) => {
  const [wordsLearned, setWordsLearned] = useState(0);

  // Move the state update outside of the useEffect
  const handleWordLearned = () => {
    setWordsLearned((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.container}>
      <h1>Swipe right and learn new words </h1>
      <p>Words learned today: {wordsLearned}</p>
      {/* Pass the handler function as a prop */}
      <WordCardCarousel words={words} onWordLearned={handleWordLearned} />
    </div>
  );
};

export default GamePage;
