import React, { useState, useEffect } from 'react';
import WordCardCarousel from '../../WordCardCarousel/WordCardCarousel';
import styles from './GamePage.module.scss';

const GamePage = () => {
  const [gameWords, setGameWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wordsLearned, setWordsLearned] = useState(0);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
        if (!response.ok) {
          throw new Error('Oh no! The words are hiding. Try again later.');
        }
        const data = await response.json();
        setGameWords(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  const handleWordLearned = () => {
    // Increment the wordsLearned count
    setWordsLearned((prevCount) => prevCount + 1);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <p>Loading words... 🕵️‍♂️</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.container}>
        <p>
          Oops! Something went wrong. The words escaped 🏃‍♂️💨. Please try refreshing the page.
        </p>
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Word Explorer! 🌍📚
      </h1>
      <p className={styles.howToUse}>
        Explore new words and expand your vocabulary. 
        Click the arrows to navigate between words,
        and click on each card to reveal its translation. Have fun learning!
      </p>
      <p className={styles.counter}>Words Learned: {wordsLearned}</p>
      <WordCardCarousel words={gameWords} onWordLearned={handleWordLearned} />
    </div>
  );
};


export default GamePage;
