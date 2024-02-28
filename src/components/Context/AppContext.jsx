    import React, { createContext, useState, useEffect, useContext } from "react";

    export const AppContext = createContext();

    export function AppProvider({ children }) {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            const data = await response.json();
            setWords(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
        };

        fetchData();
    }, []);

        const updateWord = async (updatedWord) => {
        try {
        const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}/update`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWord),
        });

        if (!response.ok) {
            throw new Error('Failed to update word');
        }

        setWords((prevWords) =>
            prevWords.map((word) => (word.id === updatedWord.id ? updatedWord : word))
        );
        } catch (error) {
        setError(error.message);
        }
    };

    const removeWord = async (wordId) => {
        try {
        const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${wordId}/delete`, {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('Failed to delete word');
        }

        setWords((prevWords) => prevWords.filter((word) => word.id !== wordId));
        } catch (error) {
        setError(error.message);
        }
    };

    const value = {
        words,
        loading,
        error,
        updateWord,
        removeWord,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
    }

    export function useAppContext() {
    return useContext(AppContext);
    }