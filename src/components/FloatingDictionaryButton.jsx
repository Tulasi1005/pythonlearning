import React from 'react';
import { BookOpen, Search } from 'lucide-react';
import { useDictionary } from '../context/DictionaryContext';

export default function FloatingDictionaryButton() {
  const { openDictionary, isOpen } = useDictionary();

  if (isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 animate-in">
      <button
        onClick={() => openDictionary()}
        className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-white/95 dark:bg-slate-900/95 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-2xl shadow-lg hover:shadow-xl border border-indigo-200 dark:border-indigo-800/80 transition-all transform hover:-translate-y-0.5 cursor-pointer group backdrop-blur-md"
        title="Open Word Meaning Dictionary"
      >
        <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-xs">
          <BookOpen size={16} />
        </div>
        <span className="font-bold text-xs sm:text-sm">Word Meaning</span>
        <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono font-bold border border-indigo-200 dark:border-indigo-800 px-1.5 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60">
          ⌘K
        </span>
      </button>
    </div>
  );
}
