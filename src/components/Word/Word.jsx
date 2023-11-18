import React from 'react';
import style from './Word.module.scss';

const Word = ({ word }) => {
    return (
    <div className="word">
    <h2>{word.english}</h2>
    <p><strong>Transcription:</strong> {word.transcription}</p>
    <p><strong>Russian:</strong> {word.russian}</p>
      {/* Add more details as needed */}
    </div>
    );
};

export default Word;