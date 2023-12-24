import React from 'react';
import WordCardCarousel from '../../WordCardCarousel/WordCardCarousel';
import CardItem from '../../CardItem/CardItem';
import Button from '../../Button/Button';
import styles from './GamePage.module.scss';
const GamePage = ({ words }) => {
  return (
    <div className={styles.container}>
      <h1>Card Game</h1>
      <WordCardCarousel words={words} />
    </div>
  );
}

export default GamePage;
