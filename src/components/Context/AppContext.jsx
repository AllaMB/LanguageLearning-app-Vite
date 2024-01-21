    import { createContext, useState, useEffect, useContext } from "react";
    // i should import here 'get' nethod

export const AppContext = createContext();

    export function AppProvider ({ children }) {
        const [words, setWords] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch('/api/words');
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
        // Implement logic to update the word on the server
        try {
            const response = await fetch(`/api/words/${updatedWord.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWord),
            });
    
            if (!response.ok) {
            throw new Error('Failed to update word');
            }
    
            // Update the local state
            setWords((prevWords) =>
            prevWords.map((word) => (word.id === updatedWord.id ? updatedWord : word))
            );
        } catch (error) {
            setError(error.message);
        }
        };
    
        const removeWord = async (wordId) => {
        // Implement logic to delete the word on the server
        try {
            const response = await fetch(`/api/words/${wordId}`, {
            method: 'DELETE',
            });
    
            if (!response.ok) {
            throw new Error('Failed to delete word');
            }
    
            // Update the local state
            setWords((prevWords) => prevWords.filter((word) => word.id !== wordId));
        } catch (error) {
            setError(error.message);
        }
        };
    
        // Implement similar logic for adding a word
    
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

    