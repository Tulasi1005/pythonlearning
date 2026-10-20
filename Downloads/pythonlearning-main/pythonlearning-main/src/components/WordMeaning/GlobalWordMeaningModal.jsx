import React, { useState, useEffect } from 'react';
import { X, BookOpen, Sparkles, Globe, Layers, Search } from 'lucide-react';
import { useDictionary } from '../../context/DictionaryContext';
import WordMeaningSearch from './WordMeaningSearch';
import WordMeaningResult from './WordMeaningResult';
import { LEARNING_STAGES } from '../../data/learningStages';
import { LEARNING_LANGUAGES } from '../../data/learningLanguages';

export default function GlobalWordMeaningModal() {
  const {
    isOpen,
    closeDictionary,
    query,
    setQuery,
    result,
    isSearching,
    error,
    lookupWord,
    selectedLanguage,
    selectedStage
  } = useDictionary();

  const [activeStage, setActiveStage] = useState(selectedStage);
  const [activeLanguage, setActiveLanguage] = useState(selectedLanguage);

  useEffect(() => {
    if (isOpen) {
      setActiveStage(selectedStage);
      setActiveLanguage(selectedLanguage);
    }
  }, [isOpen, selectedStage, selectedLanguage]);

  const handleStageChange = (newStage) => {
    setActiveStage(newStage);
    if (query.trim()) {
      lookupWord(query.trim(), activeLanguage, newStage);
    }
  };

  const handleLanguageChange = (newLang) => {
    setActiveLanguage(newLang);
    if (query.trim()) {
      lookupWord(query.trim(), newLang, activeStage);
    }
  };

  const handleSearch = (term) => {
    if (term.trim()) {
      lookupWord(term.trim(), activeLanguage, activeStage);
    }
  };

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeDictionary();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeDictionary]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9990] flex justify-end animate-in">
      {/* Backdrop */}
      <div
        onClick={closeDictionary}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity cursor-pointer"
        aria-hidden="true"
      />

      {/* Slide Modal Panel */}
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0b0f19] h-full shadow-2xl flex flex-col z-10 border-l border-slate-200 dark:border-slate-800 overflow-hidden animate-in">
        {/* Header */}
        <div className="bg-white dark:bg-[#0f172a] p-4 sm:p-5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-xs">
              <BookOpen size={20} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Word Meaning System
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Look up any technical term or English vocabulary
              </p>
            </div>
          </div>

          <button
            onClick={closeDictionary}
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition cursor-pointer border border-slate-200 dark:border-slate-700"
            aria-label="Close Word Meaning"
          >
            <X size={18} />
          </button>
        </div>

        {/* Global Search Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-[#0d1424] border-b border-slate-200 dark:border-slate-800 shrink-0">
          <WordMeaningSearch
            query={query}
            onQueryChange={setQuery}
            onSearch={handleSearch}
            isSearching={isSearching}
            autoFocus={true}
          />
        </div>

        {/* Scrollable Results Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin">
          {error && (
            <div className="notion-callout notion-callout-rose">
              <span className="text-2xl select-none">⚠️</span>
              <p className="body-base font-semibold m-0">{error}</p>
            </div>
          )}

          {result && (
            <WordMeaningResult
              result={result}
              currentStage={activeStage}
              currentLanguage={activeLanguage}
              onStageChange={handleStageChange}
              onLanguageChange={handleLanguageChange}
              onSearchSuggestion={handleSearch}
            />
          )}

          {!result && !isSearching && (
            <div className="py-16 text-center px-4">
              <span className="text-5xl block mb-3 select-none">🔎</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Search ANY Word or Term
              </h3>
              <p className="body-base text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                Type any technical word (e.g. <em>variable</em>, <em>loop</em>, <em>function</em>, <em>database</em>) or general English word to get instant multi-lingual explanations!
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800 px-4 py-3 text-center shrink-0">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold m-0">
            Stage: <span className="font-bold text-indigo-600 dark:text-indigo-400 capitalize">{activeStage}</span> • Language: <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase">{activeLanguage}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
