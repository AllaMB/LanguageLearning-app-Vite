import React from "react";
import { observer } from "mobx-react";
import WordTable from "../../WordTable/WordTable";
import wordStore from "../../MobX/WordStore";

const ExploreWords = observer(() => {
    const { words, updateWord, removeWord } = wordStore;
  
    return (
      <div>
        <h1>Enhance your vocabulary!</h1>
        <WordTable words={words} updateWord={updateWord} removeWord={removeWord} />
      </div>
    );
  });
  
  export default ExploreWords;