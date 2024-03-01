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
    return <p>Loading...wait...still loading</p>;
}

if (error) {
    return <p>Error: {error}</p>;
}

return (
    <div className={style.exploreWordsContainer}>
        <h1 className={style.heading}>
            Create your own vocabulary!
            </h1>
            <p className={style.subtitle}>
                Discover new words and build your personal vocabulary here.
                </p>
                <div className={style.addNewForm}>
        <AddWordForm onAddWord={handleAddWord} />
        </div>
            <div className={style.centerTable}>
            <WordTable words={words} updateWord={updateWord} removeWord={removeWord} />
        </div>
    
        </div>
    );
};

export default ExploreWords;