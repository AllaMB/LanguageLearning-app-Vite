import React from 'react';
import WordCardCarousel from '../../WordCardCarousel/WordCardCarousel';
import styles from './GamePage.module.scss';


const GamePage = ({ words }) => {
  return (
    <div className={styles.container}>
      <h1>Swipe right and learn new words </h1>
      <WordCardCarousel words={words} />
    </div>
  );
}

export default GamePage;
