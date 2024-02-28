    import React, { useState } from 'react';
    import style from "./AddWordForm.module.scss";
    import axios from 'axios';

    const AddWordForm = ({ onAddWord }) => {
    const [english, setEnglish] = useState('');
    const [transcription, setTranscription] = useState('');
    const [russian, setRussian] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newWord = { english, transcription, russian };
    
        try {
            // Make POST request using async/await
            const response = await axios.post('http://itgirlschool.justmakeit.ru/api/words/add', newWord);
            
            // If the request is successful, invoke the onAddWord callback with the new word data
            onAddWord(response.data);
            
            // Clear the form inputs
            setEnglish('');
            setTranscription('');
            setRussian('');
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error adding word:', error);
        }
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