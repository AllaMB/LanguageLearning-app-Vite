import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class WordStore {
  words = [];
  loading = false;
  error = null;

  editMode = false;
  editedWord = null;
  invalidFields = {};

  constructor() {
    makeObservable(this, {
      words: observable,
      loading: observable,
      error: observable,
      editMode: observable,
      editedWord: observable,
      invalidFields: observable,
      fetchWords: action,
      addWord: action,
      updateWord: action,
      removeWord: action,
      setWords: action,
      setEditMode: action,
      setEditedWord: action,
      setInvalidFields: action,
    });
  }

  async fetchWords() {
    this.loading = true;
    try {
      const response = await axios.get("http://itgirlschool.justmakeit.ru/api/words");
      this.words = response.data;
      this.loading = false;
    } catch (error) {
      this.error = error.message;
      this.loading = false;
    }
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

  updateWord(updatedWord) {
    // Assuming there's an API call to update the word on the server
    // After the API call, update the local state
    const updatedWords = this.words.map((word) =>
      word.id === updatedWord.id ? updatedWord : word
    );
    this.setWords(updatedWords);
  }

  removeWord(wordId) {
    // Assuming there's an API call to remove the word on the server
    // After the API call, update the local state
    const updatedWords = this.words.filter((word) => word.id !== wordId);
    this.setWords(updatedWords);
  }

  addWord(newWord) {
    // Assuming there's an API call to add the word on the server
    // After the API call, update the local state
    const updatedWords = [...this.words, newWord];
    this.setWords(updatedWords);
  }
}

const wordStore = new WordStore();
export default wordStore;
