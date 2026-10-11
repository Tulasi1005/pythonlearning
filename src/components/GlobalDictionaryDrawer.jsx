import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Search,
  BookOpen,
  Volume2,
  Lightbulb,
  Code,
  Copy,
  Check,
  Sparkles,
  Layers,
  Globe,
  Loader2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useDictionary } from '../context/DictionaryContext';
import { getStageById } from '../data/learningStages';

const QUICK_TERMS = [
  'reliable',
  'variable',
  'function',
  'loop',
  'syntax',
  'algorithm',
  'debugging',
  'list',
  'dictionary',
  'class',
  'api',
  'reusable'
];

export default function GlobalDictionaryDrawer() {
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
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const inputRef = useRef(null);

  // Sync with context stage & lang when drawer opens
  useEffect(() => {
    if (isOpen) {
      setActiveStage(selectedStage);
      setActiveLanguage(selectedLanguage);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 150);
    }
  }, [isOpen, selectedStage, selectedLanguage]);

  // When stage or language is toggled inside the drawer, reload the definition for current query
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      lookupWord(query.trim(), activeLanguage, activeStage);
    }
  };

  const handleSpeak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (code) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
    <div className="fixed inset-0 z-[9990] flex justify-end animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={closeDictionary}
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
      />

      {/* Slide Drawer */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 border-l border-slate-200 animate-slide-in-right overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-[#1E3A5F] to-[#306998] text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-700/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#FFD438]">
              <BookOpen size={18} />
            </div>
            <div>
              <h2 className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
                Word Meaning Dictionary
              </h2>
              <p className="text-xs text-blue-100/70">Instant explanation for any word</p>
            </div>
          </div>
          <button
            onClick={closeDictionary}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer border-none"
            aria-label="Close dictionary"
          >
            <X size={18} />
          </button>
        </div>

        {/* Stage & Language Switch Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-slate-400 font-semibold mr-1">Stage:</span>
            {[
              { id: 'kid', label: '👶 Kid' },
              { id: 'young', label: '🎒 School' },
              { id: 'college', label: '🎓 College' }
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => handleStageChange(st.id)}
                className={`px-2 py-1 rounded-md font-medium transition cursor-pointer border-none text-[11px] ${
                  activeStage === st.id
                    ? 'bg-[#306998] text-white shadow-2xs font-semibold'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => handleLanguageChange('english')}
              className={`px-2 py-1 rounded-md font-medium text-[11px] cursor-pointer border-none ${
                activeLanguage === 'english'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'bg-white text-slate-600 hover:bg-slate-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('telugu')}
              className={`px-2 py-1 rounded-md font-medium text-[11px] cursor-pointer border-none ${
                activeLanguage === 'telugu'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'bg-white text-slate-600 hover:bg-slate-200'
              }`}
            >
              TE (తెలుగు)
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-slate-100 bg-white">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search size={16} />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type any word (e.g. reliable, function, loop)..."
                className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#306998]/30 focus:border-[#306998] transition"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 border-none bg-transparent cursor-pointer"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <button
              type="submit"
              disabled={isSearching || !query.trim()}
              className="px-4 py-2.5 bg-[#306998] hover:bg-[#25547a] text-white rounded-xl text-sm font-semibold transition disabled:opacity-50 flex items-center gap-1.5 shadow-xs cursor-pointer border-none"
            >
              {isSearching ? <Loader2 size={15} className="animate-spin" /> : null}
              {isSearching ? 'Looking...' : 'Search'}
            </button>
          </form>

          {/* Quick Words Chips */}
          <div className="mt-3 flex flex-wrap gap-1.5 items-center">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
              Quick:
            </span>
            {QUICK_TERMS.map((term) => (
              <button
                key={term}
                onClick={() => lookupWord(term, activeLanguage, activeStage)}
                className={`px-2 py-0.5 text-xs rounded-full border transition cursor-pointer ${
                  query.toLowerCase().trim() === term
                    ? 'bg-blue-100 text-[#306998] border-blue-300 font-bold'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200'
                }`}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {error && (
            <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-sm leading-relaxed">
              <p className="font-semibold">{error}</p>
              <p className="mt-2 text-xs text-rose-600">
                Tip: You can highlight/select any word on any page to define it instantly!
              </p>
            </div>
          )}

          {isSearching && !result && (
            <div className="flex flex-col items-center justify-center py-16 text-slate-400">
              <Loader2 size={32} className="animate-spin text-[#306998] mb-3" />
              <p className="text-sm font-medium">Finding word meaning & context...</p>
            </div>
          )}

          {result && (
            <div className="animate-fade-in space-y-4">
              {/* Word Title & Pronunciation */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-4 rounded-2xl border border-blue-100">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 capitalize tracking-tight">
                        {result.term}
                      </h3>
                      {result.type === 'python' ? (
                        <span className="px-2 py-0.5 bg-[#FFE873] text-slate-900 text-[10px] font-bold rounded-full uppercase tracking-wider">
                          Python Concept
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-slate-200 text-slate-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                          General Term
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleSpeak(result.term + '. ' + result.meaning)}
                    className={`p-2 rounded-xl transition cursor-pointer border-none flex items-center gap-1 text-xs font-semibold ${
                      isSpeaking
                        ? 'bg-blue-600 text-white animate-pulse'
                        : 'bg-white hover:bg-blue-100 text-[#306998] border border-blue-200 shadow-2xs'
                    }`}
                    title="Pronounce word"
                  >
                    <Volume2 size={16} />
                    <span className="hidden sm:inline">Listen</span>
                  </button>
                </div>

                {/* Primary Meaning */}
                <div className="mt-3">
                  <p className="text-base text-slate-800 font-medium leading-relaxed">
                    {result.meaning}
                  </p>
                </div>
              </div>

              {/* Detailed Explanation */}
              {result.explanation && (
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-amber-500" /> Explanation
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {result.explanation}
                  </p>
                </div>
              )}

              {/* Simple Example */}
              {result.simpleExample && (
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Lightbulb size={14} className="text-amber-600" /> Everyday Example
                  </h4>
                  <p className="text-sm text-amber-950 leading-relaxed">
                    {result.simpleExample}
                  </p>
                </div>
              )}

              {/* Python Code Example if available */}
              {result.pythonExample && (
                <div className="bg-slate-900 text-slate-100 rounded-xl p-4 border border-slate-800 overflow-hidden shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#FFD438] uppercase tracking-wider flex items-center gap-1.5">
                      <Code size={14} /> Python Code
                    </span>
                    <button
                      onClick={() => handleCopy(result.pythonExample)}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded flex items-center gap-1 border-none cursor-pointer transition"
                    >
                      {copied ? (
                        <>
                          <Check size={12} className="text-emerald-400" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={12} /> Copy Code
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-3 bg-black/40 rounded-lg text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                    <code>{result.pythonExample}</code>
                  </pre>
                  {result.pythonExplanation && (
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed flex items-start gap-1">
                      <ChevronRight size={13} className="text-[#4B8BBE] shrink-0 mt-0.5" />
                      <span>{result.pythonExplanation}</span>
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Initial State / Tip */}
          {!result && !error && !isSearching && (
            <div className="py-10 text-center px-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-[#306998] flex items-center justify-center mb-3">
                <BookOpen size={28} />
              </div>
              <h4 className="text-sm font-bold text-slate-700 mb-1">
                Lookup Any Word or Term
              </h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                Type any English word or Python term above, or highlight any word on any page to see its definition instantly!
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 text-center">
          <p className="text-[11px] text-slate-500">
            Adaptive dictionary dynamically fits your stage: <span className="font-bold text-slate-700 capitalize">{activeStage}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
