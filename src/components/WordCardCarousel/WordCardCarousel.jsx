    import React, { useState, useEffect } from 'react';
    import CardItem from '../CardItem/CardItem';
    import style from './WordCardCarousel.module.scss';

    const WordCardCarousel = ({ words, initialIndex = 0, onWordLearned }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === words.length - 1 ? 0 : prevIndex + 1;

        // Delay the execution of onWordLearned to the next tick of the event loop
        setTimeout(() => onWordLearned(), 0);

        return newIndex;
        });
    };

    const showCard = words.length > 0;

    return (
        <div className={style.carousel}>
        {showCard && (
            <>
            <CardItem
                word={words[currentIndex].english}
                transcription={words[currentIndex].transcription}
                translation={words[currentIndex].russian}
            />
            <div className={style.buttons}>
                <button onClick={handlePrevClick}>&lt; Previous</button>
                <button onClick={handleNextClick}>Next &gt;</button>
            </div>
            </>
        )}
        {!showCard && <p>No cards available.</p>}
        </div>
    );
    };

    export default WordCardCarousel;
