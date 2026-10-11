import React, { createContext, useContext, useState, useCallback } from 'react';
import { getWordMeaning, addRecentSearch } from '../services/wordMeaningService';

const DictionaryContext = createContext(null);

export function DictionaryProvider({ children, selectedLanguage = 'english', selectedStage = 'young' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const lookupWord = useCallback(async (word, lang = selectedLanguage, stage = selectedStage, context = 'general') => {
    if (!word || !word.trim()) return;
    const cleanWord = word.trim().replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
    if (!cleanWord) return;

    setQuery(cleanWord);
    setIsOpen(true);
    setIsSearching(true);
    setError('');

    try {
      const res = await getWordMeaning(cleanWord, stage, lang, context);
      if (res) {
        setResult(res);
        addRecentSearch(cleanWord);
      } else {
        setResult(null);
        setError(`No definition found for "${cleanWord}". Try searching terms like 'automation', 'reliable', 'variable', 'function', or 'algorithm'.`);
      }
    } catch {
      setResult(null);
      setError("An error occurred while fetching the word definition. Please try again.");
    } finally {
      setIsSearching(false);
    }
  }, [selectedLanguage, selectedStage]);

  const openDictionary = useCallback((initialWord = '') => {
    setIsOpen(true);
    if (initialWord) {
      lookupWord(initialWord);
    }
  }, [lookupWord]);

  const closeDictionary = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <DictionaryContext.Provider
      value={{
        isOpen,
        openDictionary,
        closeDictionary,
        query,
        setQuery,
        result,
        setResult,
        isSearching,
        error,
        setError,
        lookupWord,
        selectedLanguage,
        selectedStage
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return context;
}
