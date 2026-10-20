import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2, History, Sparkles } from 'lucide-react';
import { getRecentSearches } from '../../services/wordMeaningService';

const QUICK_DISCOVERY_WORDS = [
  'Automation',
  'Variable',
  'Function',
  'Reliable',
  'Reusable',
  'Syntax',
  'Algorithm',
  'Database',
  'Application',
  'Parameter'
];

export default function WordMeaningSearch({
  query,
  onQueryChange,
  onSearch,
  isSearching,
  autoFocus = false
}) {
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    setRecentSearches(getRecentSearches());
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setRecentSearches(getRecentSearches());
    }
  };

  const handleChipClick = (term) => {
    onQueryChange(term);
    onSearch(term);
    setRecentSearches(getRecentSearches());
  };

  return (
    <div className="w-full space-y-3">
      {/* Search Input Bar */}
      <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search size={18} />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search word (e.g. automation, variable, reliable)..."
            className="w-full pl-11 pr-9 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition shadow-2xs"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border-none bg-transparent cursor-pointer"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={isSearching || !query.trim()}
          className="btn-vibrant-primary shrink-0 py-2.5 px-4 text-xs sm:text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSearching ? <Loader2 size={16} className="animate-spin" /> : null}
          <span>{isSearching ? 'Searching...' : 'Search'}</span>
        </button>
      </form>

      {/* Quick Discovery Chips */}
      <div className="flex items-center gap-1.5 flex-wrap text-xs">
        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1 mr-1">
          <Sparkles size={13} className="text-amber-500" /> Suggestions:
        </span>
        {QUICK_DISCOVERY_WORDS.map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => handleChipClick(term)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer border transition ${
              query.toLowerCase().trim() === term.toLowerCase()
                ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700 font-bold'
                : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
            }`}
          >
            {term}
          </button>
        ))}
      </div>

      {/* Recent Session Searches */}
      {recentSearches.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap text-xs pt-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-1">
            <History size={13} /> Recent:
          </span>
          {recentSearches.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => handleChipClick(term)}
              className="px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              • {term}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
