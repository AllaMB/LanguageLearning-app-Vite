                import React, { useState} from 'react';
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
        <i className={style.hint}>Нажмите, чтобы увидеть перевод</i>
            </div>
        );
        }

        export default CardItem;