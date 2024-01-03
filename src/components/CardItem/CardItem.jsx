                import React, { useState, useEffect } from 'react';
                import Word from '../Word/Word';
                import style from './CardItem.module.scss';


        function CardItem({ word, transcription, translation }) {
        const [flipped, setFlipped] = useState(false);

        const handleClick = () => {
            setFlipped(!flipped);
        };

        return (
            <div className={style.card} onClick={handleClick}>
            <h2 className={style.word}>{word}</h2>
            <p className={style.transcription}>{transcription}</p>
        {flipped && <p className={style.translation}>{translation}</p>}
        <p className={style.hint}>Нажмите, чтобы увидеть перевод</p>
            </div>
        );
        }

        export default CardItem;

        