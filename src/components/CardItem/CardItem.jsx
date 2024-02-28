import React, { useState, useEffect, useRef} from 'react';
import style from './CardItem.module.scss';


function CardItem({ id, word, transcription, translation, flipped, onClick }) {
const hintRef = useRef(null);


useEffect(() => {
if(hintRef) {
hintRef.current.focus();
}
}, [hintRef, flipped]);

return (
<div className={style.card} onClick={onClick}>
<h2 className={style.word}>{word}</h2>
<p className={style.transcription}>{transcription}</p>
{flipped && <p className={style.translation}>{translation}</p>}
<button className={style.hint} ref={hintRef}>Нажмите, чтобы увидеть перевод</button>
</div>
);
}

export default CardItem;