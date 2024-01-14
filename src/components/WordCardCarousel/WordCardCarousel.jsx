    import React, { useState, useEffect } from 'react';
    import CardItem from '../CardItem/CardItem';
    import style from './WordCardCarousel.module.scss';

    const WordCardCarousel = ({ words, initialIndex = 0, onWordLearned }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const [flipped, setFlipped] = useState(false);

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
        setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === words.length - 1 ? 0 : prevIndex + 1;

        // Delay the execution of onWordLearned to the next tick of the event loop
        setTimeout(() => onWordLearned(), 0);

        return newIndex;
        });
        setFlipped(false);
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
                flipped={flipped}
                onClick={handleFlip}
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
