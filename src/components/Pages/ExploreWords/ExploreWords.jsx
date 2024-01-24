    import React from "react";
    import WordTable from "../../WordTable/WordTable";
    import AddWordForm from "../../AddWordForm/AddWordForm";
    import style from "./ExploreWords.module.scss";
    import { useAppContext } from "../../Context/AppContext";

    const ExploreWords = () => {
    const { words, updateWord, removeWord, addWord, loading, error } = useAppContext();

    const handleAddWord = (newWord) => {
        addWord(newWord);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={style.exploreWordsContainer}>
        <h1>Enhance your vocabulary! </h1>
        <AddWordForm onAddWord={handleAddWord} />
        <WordTable words={words} updateWord={updateWord} removeWord={removeWord} />
        </div>
    );
    };

    export default ExploreWords;
