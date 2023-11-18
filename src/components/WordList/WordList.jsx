import React from 'react';
import Word from './Word';
import style from './WordList.module.scss';

const WordList = ({ words }) => {
  return (
    <div className="word-list">
      {words.map((word) => (
        <Word key={word.id} word={word} />
      ))}
    </div>
  );
};

export default WordList;