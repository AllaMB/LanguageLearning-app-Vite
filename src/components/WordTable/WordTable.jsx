    import React, { useState } from "react";
    import style from './WordTable.module.scss';
    import Word from "../Word/Word";
    

    const WordTable = ({ words, updateWord }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedWord, setEditedWord] = useState(null);

    const handleEditClick = (word) => {
        setEditMode(true);
        setEditedWord({...word});
    };

    const handleCancelClick = () => {
        setEditMode(false);
        setEditedWord(null);
    };

    const handleSaveClick = () => {
        updateWord(editedWord);
        setEditMode(false);
        setEditedWord(null);
    };

    const handleFieldChange = (fieldName, value) => {
        setEditedWord((prevEditedWord) => ({
    ...prevEditedWord,
        [fieldName]: value,
        }));
    };
    return (
        <table>
        <thead>
            <tr>
            <th>Word</th>
            <th>Transcription</th>
            <th>Translation</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {words.map((word) => (
            <tr key={word.id}>
                <td>
                {editMode && editedWord && editedWord.id === word.id ? (
                    <input type="text" 
                    value={editedWord.english}
                    onChange={(e) => handleFieldChange('english', e.target.value)} 
                    />
                ) : (
                    word.english
                )}
                </td>
                <td>
                {editMode && editedWord && editedWord.id === word.id ? (
                    <input type="text" 
                    value={editedWord.transcription}
                    onChange={(e) => handleFieldChange('transcription', e.target.value)}
                    />
                ) : (
                    word.transcription
                )}
                </td>
                <td>
                {editMode && editedWord && editedWord.id === word.id ? (
                    <input type="text" 
                    value={editedWord.russian} 
                    onChange={(e) => handleFieldChange('russian', e.target.value)}
                    />
                ) : (
                    word.russian
                )}
                </td>
                <td>
                {editMode && editedWord && editedWord.id === word.id ? (
                    <>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                    </>
                ) : (
                    <button onClick={() => handleEditClick(word)}>Edit</button>
                )}
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    );
    };

    export default WordTable;

