import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class WordStore {
  words = [];
  loading = false;
  error = null;
  editMode = false;
  editedWord = null;
  invalidFields = {};

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWords() {
    this.loading = true;
    try {
      const response = await axios.get('http://itgirlschool.justmakeit.ru/api/words');
      this.setWords(response.data);
      this.loading = false;
      return response.data;
    } catch (error) {
      this.error = error.message;
      this.loading = false;
    }
  }

  setEditingState(wordId, isEditing) {
    const updatedWords = this.words.map(word => {
      if (word.id === wordId) {
        return { ...word, isEditing };
      }
      return word;
    });
    this.setWords(updatedWords);
  }

  setWords(words) {
    this.words = words;
  }

  setEditMode(editMode) {
    this.editMode = editMode;
  }

  setEditedWord(word) {
    this.editedWord = word;
  }

  setInvalidFields(fields) {
    this.invalidFields = fields;
  }

  async updateWord(updatedWord) {
    try {
      const response = await axios.post(
        `http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}/update`,
        updatedWord
      );

      if (!response.ok) {
        throw new Error('Failed to update word');
      }

      const updatedWords = this.words.map(word =>
        word.id === updatedWord.id ? updatedWord : word
      );
      this.setWords(updatedWords);
    } catch (error) {
      this.error = error.message;
    }
  }

  async removeWord(wordId) {
    try {
      const response = await axios.post(
        `http://itgirlschool.justmakeit.ru/api/words/${wordId}/delete`
      );

      if (!response.ok) {
        throw new Error('Failed to delete word');
      }

      const updatedWords = this.words.filter(word => word.id !== wordId);
      this.setWords(updatedWords);
    } catch (error) {
      this.error = error.message;
    }
  }

  async addWord(newWord) {
    try {
      const response = await axios.post(
        'http://itgirlschool.justmakeit.ru/api/words/add',
        newWord
      );

      if (!response.ok) {
        throw new Error('Failed to add word');
      }

      const updatedWords = [...this.words, newWord];
      this.setWords(updatedWords);
    } catch (error) {
      this.error = error.message;
    }
  }
}

const wordStore = new WordStore();
export default wordStore;
