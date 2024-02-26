import React, { useState } from 'react';
import style from "./AddWordForm.module.scss";

const AddWordForm = ({ onAddWord }) => {
const [english, setEnglish] = useState('');
const [transcription, setTranscription] = useState('');
const [russian, setRussian] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const newWord = { english, transcription, russian };
    onAddWord(newWord);
    setEnglish('');
    setTranscription('');
    setRussian('');
};

return (
    <form className={style.form_container} onSubmit={handleSubmit}>
    <label className={style.label}>
        English:
        <input
        className={style.input}
        type="text"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
        />
    </label>
    <label className={style.label}>
        Transcription:
        <input
        className={style.input}
        type="text"
        value={transcription}
        onChange={(e) => setTranscription(e.target.value)}
        />
    </label>
    <label className={style.label}>
        Russian:
        <input
        className={style.input}
        type="text"
        value={russian}
        onChange={(e) => setRussian(e.target.value)}
        />
    </label>
    <button className={style.button} type="submit">
        Add Word
    </button>
    </form>
);
};

export default AddWordForm;