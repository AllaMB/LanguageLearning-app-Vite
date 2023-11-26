//displaying a single word with the ability to show/hide the translation
import React, { useState }  from 'react';
import style from './Word.module.scss';

const Word = ({ word }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className="word">
      <h2>{word.english}</h2>
      {!showTranslation && <button onClick={handleShowTranslation}>Показать перевод</button>}
      {showTranslation && <p>{word.russian}</p>}
    </div>
  );
};

export default Word;

