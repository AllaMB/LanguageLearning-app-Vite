import React from "react";
import WordTable from "../../WordTable/WordTable";

const ExploreWords = ({ words, updateWord, removeWord }) => {
    return (
        <div>
            <h1>Enhance your vocabulary! </h1>
            <WordTable words={words} updateWord={updateWord} removeWord={removeWord} />
        </div>
    );
}

export default ExploreWords;