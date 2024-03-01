import React, {useEffect} from "react";
import styles from "./WordTable.module.scss";
import {inject, observer} from "mobx-react";

const WordTable = inject('wordsStore')(
    observer(({ wordsStore }) => {
      useEffect(() => {
        wordsStore.fetchWords(); // Fetch words when the component mounts
      }, []);
  
      if (wordsStore.loading) {
        return <div>Loading...🕵️‍♂️</div>;
      }
  
      if (wordsStore.error) {
        return (
          <div className={styles.container}>
            <p>
              Oops! Something went wrong. The words escaped 🏃‍♂️💨. Please try refreshing the page.
            </p>
            <p>Error: {wordsStore.error}</p>
          </div>
        );
      }

      const handleCancelClick = () => {
        wordsStore.setEditingState(wordsStore.editedWord.id, false);
        wordsStore.setEditedWord(null);
        wordsStore.setInvalidFields({});
      };
  
      const handleSaveClick = () => {
        if (wordsStore.editedWord) {
          const hasEmptyField = Object.values(wordsStore.editedWord).some((field) => {
            if (typeof field === 'string') {
              return !field.trim();
            }
            return false;
          });

          if (hasEmptyField) {
            wordsStore.setInvalidFields((prevInvalidFields) => {
              const updatedInvalidFields = {};
              Object.keys(wordsStore.editedWord).forEach((field) => {
                if (
                  typeof wordsStore.editedWord[field] === 'string' &&
                  !wordsStore.editedWord[field].trim()
                ) {
                  updatedInvalidFields[field] = true;
                }
              });
              return { ...prevInvalidFields, ...updatedInvalidFields };
            });
            alert('Please fill in all fields.');
          } else {
            wordsStore.updateWord(wordsStore.editedWord);
            wordsStore.setEditingState(wordsStore.editedWord.id, false);
            wordsStore.setEditedWord(null);
            wordsStore.setInvalidFields({});
          }
        }
      };
  
      const handleFieldChange = (fieldName, value) => {
        wordsStore.setEditedWord((prevEditedWord) => ({
          ...prevEditedWord,
          [fieldName]: value,
        }));
  
        wordsStore.setInvalidFields((prevInvalidFields) => ({
          ...prevInvalidFields,
          [fieldName]: false,
        }));
  
        if (!value.trim()) {
          wordsStore.setInvalidFields((prevInvalidFields) => ({
            ...prevInvalidFields,
            [fieldName]: true,
          }));
        }
      };
  
      const handleEditClick = (word) => {
        wordsStore.setEditingState(word.id, true);
        wordsStore.setEditedWord({ ...word });
      };
  
      const handleRemoveClick = (wordId) => {
        wordsStore.removeWord(wordId);
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
            {wordsStore.words.map((word) => (
              <tr key={word.id}>
                <td>
                  {word.isEditing ? (
                    <input
                      type="text"
                      value={wordsStore.editedWord?.english || ''}
                      onChange={(e) => handleFieldChange('english', e.target.value)}
                      style={{
                        borderColor: wordsStore.invalidFields.english ? 'red' : '',
                      }}
                    />
                  ) : (
                    word.english
                  )}
                </td>
                <td>
                  {word.isEditing ? (
                    <input
                      type="text"
                      value={wordsStore.editedWord?.transcription || ''}
                      onChange={(e) => handleFieldChange('transcription', e.target.value)}
                      style={{
                        borderColor: wordsStore.invalidFields.transcription ? 'red' : '',
                      }}
                    />
                  ) : (
                    word.transcription
                  )}
                </td>
                <td>
                  {word.isEditing ? (
                    <input
                      type="text"
                      value={wordsStore.editedWord?.russian || ''}
                      onChange={(e) => handleFieldChange('russian', e.target.value)}
                      style={{
                        borderColor: wordsStore.invalidFields.russian ? 'red' : '',
                      }}
                    />
                  ) : (
                    word.russian
                  )}
                </td>
                <td>
                  {word.isEditing ? (
                    <>
                      <button onClick={handleSaveClick}>Save</button>
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
  );
  
  export default WordTable;