// displaying a list of words in the form of a list (blockwise) using the Word component.

import React from 'react';
import Word from '../Word/Word';
import style from './WordList.module.scss';

const WordList = ({ words }) => {
  return (
    <div className="word-list">
      {words.map((word, index) => (
        <Word key={index} {...word} />
      ))}
    </div>
  );
};

export default WordList;