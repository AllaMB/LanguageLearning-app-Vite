import React from "react";
import WordTable from "../../WordTable/WordTable";

export default function ExploreWords({words, updateWord }) {
    return (
        <div>
            <h1>Explore Words</h1>
            <WordTable words={words} updateWord={updateWord} />
        </div>
    );
}