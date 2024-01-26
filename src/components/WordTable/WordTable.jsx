        import React, { useEffect } from "react";
        import styles from "./WordTable.module.scss";
        import Word from "../Word/Word";
        import { observer } from "mobx-react";
        import wordStore from "../MobX/WordStore";

        const WordTable = observer(() => {
            const {
            words,
            setEditMode,
            setEditedWord,
            setInvalidFields,
            editMode,
            editedWord,
            invalidFields,
            updateWord,
            removeWord,
            addWord,
            loading,
            error,
            fetchWords, 
            } = wordStore;
    
            useEffect(() => {
                wordStore.fetchWords(); // Fetch words when the component mounts
            }, []);

            if (loading) {
            return <div>Loading...🕵️‍♂️</div>;
            }
        
            if (error) {
            return (
                <div className={styles.container}>
                <p>
                Oops! Something went wrong. The words escaped 🏃‍♂️💨. Please try refreshing the page.
                </p>
                <p>Error: {error}</p>
            </div>
            );
            }
        
            const handleEditClick = (word) => {
            setEditMode(true);
            setEditedWord({ ...word });
            };
        
            const handleCancelClick = () => {
            setEditMode(false);
            setEditedWord(null);
            setInvalidFields({});
            };
        
            const handleSaveClick = () => {
            const hasEmptyField = Object.values(editedWord).some((field) => !field.trim()
            );
        
            if (hasEmptyField) {
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
                        <tr key={word.id}>
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
                                <button onClick={handleSaveClick} >Save</button>
                                <button onClick={handleCancelClick}>Cancel</button>
                                <button onClick={() => handleRemoveClick(word.id)}>Delete</button>
                                </>
                            ) : (
                                <>
                                <button onClick={() => handleEditClick(word)}>Edit</button>
                                <button onClick={() => handleRemoveClick(word.id)}>Delete</button>
                                </>
                            )}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                );
                })

                export default WordTable;