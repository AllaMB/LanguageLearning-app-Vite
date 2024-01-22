// Words.jsx
import React, { useState, useEffect } from 'react';

export default function Words() {
  let [words, setWords] = useState([]);


  useEffect(() => {
    fetch('http://itgirlschool.justmakeit.ru/api/words')
      .then((response) => response.json())
      .then((response) => setWords(words = response))
  }, []);

  return (
    <ol>
      {words.map(word => (
        <li key={word.id}>{word.english} - {word.russian}</li>
      ))}
    </ol>
  );
}
