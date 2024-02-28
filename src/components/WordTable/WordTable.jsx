    import React, { useState } from "react";
    import AddWordForm from "../AddWordForm/AddWordForm";
    import Word from "../Word/Word";
    import { useAppContext } from "../Context/AppContext";

    // images
    import deleteIcon from "./../../assets/images/delete.svg";
    import saveIcon from "../../assets/images/save.svg";
    import editIcon from "../../assets/images/edit.svg";
    import cancelIcon from "../../assets/images/cancel.svg";


            const WordTable = () => {
            const { words, updateWord, removeWord, loading, error } = useAppContext();
            const [editMode, setEditMode] = useState(false);
            const [editedWord, setEditedWord] = useState(null);
            const [invalidFields, setInvalidFields] = useState({});

            if (loading) {
                return <div>Loading...🕵️‍♂️</div>;
            }
            
            if (error) {
                return <div>Error: {error}</div>;
            }

            const handleEditClick = (word) => {
                setEditMode(true);
                // Creating shallow copy using the spread operator
                setEditedWord({ ...word });
            };

            const handleCancelClick = () => {
                setEditMode(false);
                setEditedWord(null);
                setInvalidFields({});
            };

            const handleSaveClick = () => {
                const hasEmptyField = Object.values(editedWord).some(
                (field) => !field.trim()
                );

                if (hasEmptyField) {
                // At least one field is empty, set invalid fields
                setInvalidFields((prevInvalidFields) => {
                    const updatedInvalidFields = {};
                    Object.keys(editedWord).forEach((field) => {
                    if (!editedWord[field].trim()) {
                        updatedInvalidFields[field] = true;
                    }
                    });
                    return { ...prevInvalidFields, ...updatedInvalidFields };
                });
                alert("Please fill in all fields.");
                } else {
                // All fields are filled, proceed with saving
                updateWord(editedWord);
                setEditMode(false);
                setEditedWord(null);
                setInvalidFields({});
                }
            };

            const handleFieldChange = (fieldName, value) => {
                setEditedWord((prevEditedWord) => ({
                ...prevEditedWord,
                [fieldName]: value,
                }));

                // Remove the validation for the changed field
                setInvalidFields((prevInvalidFields) => ({
                ...prevInvalidFields,
                [fieldName]: false,
                }));

                // If the changed field is now empty, mark it as invalid
                if (!value.trim()) {
                setInvalidFields((prevInvalidFields) => ({
                    ...prevInvalidFields,
                    [fieldName]: true,
                }));
                }
            };

            const handleRemoveClick = (wordId) => {
                // Call the removeWord function with the ID of the word to be removed
                removeWord(wordId);
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
                    <tr key={words.id}>
                        <td>
                        {editMode && editedWord && editedWord.id === word.id ? (
                            <input
                            type="text"
                            value={editedWord.english}
                            onChange={(e) => handleFieldChange("english", e.target.value)}
                            style={{
                                borderColor: invalidFields.english ? "red" : "",
                            }}
                            />
                        ) : (
                            word.english
                        )}
                        </td>
                        <td>
                        {editMode && editedWord && editedWord.id === word.id ? (
                            <input
                            type="text"
                            value={editedWord.transcription}
                            onChange={(e) =>
                                handleFieldChange("transcription", e.target.value)
                            }
                            style={{
                                borderColor: invalidFields.transcription ? "red" : "",
                            }}
                            />
                        ) : (
                            word.transcription
                        )}
                        </td>
                        <td>
                        {editMode && editedWord && editedWord.id === word.id ? (
                            <input
                            type="text"
                            value={editedWord.russian}
                            onChange={(e) =>
                                handleFieldChange("russian", e.target.value)
                            }
                            style={{
                                borderColor: invalidFields.russian ? "red" : "",
                            }}
                            />
                        ) : (
                            word.russian
                        )}
                        </td>
                        <td>
                        {editMode && editedWord && editedWord.id === word.id ? (
                        <>
                   <button onClick={handleSaveClick}>
        <img src={saveIcon} alt="Save" style={{ width: '20px', height: '20px' }} />
      </button>
      <button onClick={handleCancelClick}>
        <img src={cancelIcon} alt="Cancel" style={{ width: '20px', height: '20px' }} />
      </button>
      <button onClick={() => handleRemoveClick(word.id)}>
        <img src={deleteIcon} alt="Delete" style={{ width: '20px', height: '20px' }} />
      </button>
                    </>
                    ) : (
                    <>
                     <button onClick={() => handleEditClick(word)}>
        <img src={editIcon} alt="Edit" style={{ width: '20px', height: '20px' }} />
      </button>
      <button onClick={() => handleRemoveClick(word.id)}>
        <img src={deleteIcon} alt="Delete" style={{ width: '20px', height: '20px' }} />
      </button>
                    </>
                    )}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            );
            };

            export default WordTable;
