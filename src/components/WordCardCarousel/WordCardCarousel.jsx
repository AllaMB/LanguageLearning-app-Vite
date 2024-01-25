    import React, { useState, useEffect } from 'react';
    import CardItem from '../CardItem/CardItem';
    import style from './WordCardCarousel.module.scss';

    const WordCardCarousel = ({ words, initialIndex = 0, onWordLearned }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [flipped, setFlipped] = useState(false);
    const [learnedWords, setLearnedWords] = useState([]);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
        setFlipped(false);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
        setFlipped(false);
    };

    const handleLearnWord = () => {
        const currentWord = words[currentIndex];
        
        // Check if the current word has not been learned
        if (!learnedWords.includes(currentWord.id)) {
        // Add the current word to the list of learned words
        setLearnedWords((prevLearnedWords) => [...prevLearnedWords, currentWord.id]);

        // Check if the onWordLearned callback is provided before invoking
        if (onWordLearned) {
            onWordLearned();
        }
        }
    };

    // Check if words is undefined or empty
    if (!words || words.length === 0) {
        return <p>No words available. They are on vacation.</p>;
    }

    return (
        <div className={style.buttons}>
        <button onClick={handlePrevClick}>&lt; </button>
        <CardItem
            word={words[currentIndex].english}
            transcription={words[currentIndex].transcription}
            translation={words[currentIndex].russian}
            flipped={flipped}
            onClick={handleFlip}
        />
        <button onClick={() => { handleNextClick(); handleLearnWord(); }}> &gt;</button>
        </div>
    );
    };

    export default WordCardCarousel;
