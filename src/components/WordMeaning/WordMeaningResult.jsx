import React, { useState } from 'react';
import {
  BookOpen,
  Volume2,
  Lightbulb,
  Brain,
  Code2,
  Copy,
  Check,
  ChevronRight,
  Sparkles,
  Layers,
  Globe
} from 'lucide-react';
import { LEARNING_STAGES } from '../../data/learningStages';
import { LEARNING_LANGUAGES } from '../../data/learningLanguages';

export default function WordMeaningResult({
  result,
  currentStage = 'young',
  currentLanguage = 'english',
  onStageChange,
  onLanguageChange,
  onSearchSuggestion
}) {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!result) return null;

  // If word not found
  if (result.notFound) {
    return (
      <div className="notion-callout notion-callout-rose space-y-3">
        <span className="text-2xl select-none">⚠️</span>
        <div className="space-y-2 w-full">
          <h4 className="font-bold text-base m-0">Word Not Found</h4>
          <p className="body-base leading-relaxed m-0">{result.message}</p>

          {result.suggestion && (
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 mt-3 shadow-sm">
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Did you mean: <strong className="text-slate-900 dark:text-white capitalize">{result.suggestion}</strong>?
              </span>
              <button
                onClick={() => onSearchSuggestion && onSearchSuggestion(result.suggestion)}
                className="btn-vibrant-primary py-1.5 px-3 text-xs"
              >
                View Meaning
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const handleSpeak = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const textToSpeak = `${result.term}. ${result.simpleMeaning}. ${result.explanation || ''}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopyCode = (code) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4 animate-in">
      {/* Word Header & Pronunciation */}
      <div className="modern-card p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-2xl select-none">📖</span>
              <h3 className="heading-card capitalize m-0 text-slate-900 dark:text-white">
                {result.term}
              </h3>
              {result.category === 'python' ? (
                <span className="notion-tag text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800">
                  🐍 Python Term
                </span>
              ) : result.category === 'computer' ? (
                <span className="notion-tag text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800">
                  💻 Tech & Computing
                </span>
              ) : (
                <span className="notion-tag text-xs font-bold text-slate-700 dark:text-slate-300">
                  📚 Vocabulary
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleSpeak}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition cursor-pointer border ${
              isSpeaking
                ? 'bg-amber-100 text-amber-950 border-amber-300 font-extrabold shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
            }`}
            title="Listen to pronunciation"
          >
            <Volume2 size={16} />
            <span>Pronounce</span>
          </button>
        </div>

        {/* Stage & Language Tags in Header */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <span>Stage:</span>
            <span className="font-bold text-slate-900 dark:text-white capitalize">
              {currentStage}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <Globe size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span>Language:</span>
            <span className="font-bold text-slate-900 dark:text-white uppercase">
              {currentLanguage}
            </span>
          </div>
        </div>
      </div>

      {/* 1. Simple Meaning */}
      <div className="notion-callout notion-callout-blue">
        <span className="text-2xl select-none">✨</span>
        <div>
          <h4 className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-1">
            Simple Meaning
          </h4>
          <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed m-0">
            {result.simpleMeaning}
          </p>
        </div>
      </div>

      {/* 2. Explanation */}
      {result.explanation && (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Layers size={14} /> Detailed Explanation
          </h4>
          <p className="body-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal whitespace-pre-line m-0">
            {result.explanation}
          </p>
        </div>
      )}

      {/* 3. Example */}
      {result.example && (
        <div className="notion-callout notion-callout-amber">
          <span className="text-2xl select-none">💡</span>
          <div>
            <h4 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider mb-1">
              Example Context
            </h4>
            <p className="body-base text-slate-800 dark:text-slate-200 leading-relaxed m-0">
              {result.example}
            </p>
          </div>
        </div>
      )}

      {/* 4. Python Example & How It Is Used */}
      {result.pythonExample && (
        <div className="code-block-container">
          <div className="code-block-header flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Code2 size={16} /> 🐍 Python Code
            </span>
            <button
              onClick={() => handleCopyCode(result.pythonExample)}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded-lg flex items-center gap-1.5 border border-slate-700 cursor-pointer transition font-semibold"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 bg-slate-950 text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed border-b border-slate-800">
            <pre className="m-0"><code>{result.pythonExample}</code></pre>
          </div>

          {result.howUsed && (
            <div className="p-4 bg-slate-900/90 text-slate-200">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                How It Is Used:
              </span>
              <p className="body-base text-slate-300 leading-relaxed m-0">
                {result.howUsed}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 5. Remember This */}
      {result.remember && (
        <div className="notion-callout notion-callout-green">
          <span className="text-2xl select-none">🧠</span>
          <div>
            <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-1">
              Key Takeaway Rule
            </h4>
            <p className="body-base font-bold text-slate-900 dark:text-white leading-relaxed m-0">
              {result.remember}
            </p>
          </div>
        </div>
      )}

      {/* Interactive Switchers at bottom */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-slate-400 text-xs font-bold uppercase">Stage:</span>
          {LEARNING_STAGES.map((st) => (
            <button
              key={st.id}
              onClick={() => onStageChange && onStageChange(st.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer border transition ${
                currentStage === st.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100'
              }`}
            >
              <span>{st.icon}</span> <span className="hidden sm:inline">{st.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-slate-400 text-xs font-bold uppercase">Lang:</span>
          {LEARNING_LANGUAGES.map((lg) => (
            <button
              key={lg.id}
              onClick={() => onLanguageChange && onLanguageChange(lg.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer border transition ${
                currentLanguage === lg.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100'
              }`}
            >
              <span>{lg.shortLabel}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
