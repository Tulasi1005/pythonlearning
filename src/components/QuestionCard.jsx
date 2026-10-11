import React, { useState } from "react";
import CodeBlock from "./CodeBlock";
import { CheckCircle2, XCircle, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function QuestionCard({ item, index }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const isCorrect = selectedOption && selectedOption === item.correctAnswer;

  return (
    <div className="modern-card p-5 sm:p-7 transition-colors">
      {/* Question Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold font-mono shadow-xs">
            {index + 1}
          </span>
          <span className="notion-tag text-xs uppercase font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800">
            {item.type}
          </span>
        </div>
        <span className="notion-tag text-xs capitalize text-slate-700 dark:text-slate-300 font-bold">
          {item.category}
        </span>
      </div>

      {/* Question Statement */}
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-4">
        {item.question}
      </h3>

      {/* Code Snippet if applicable */}
      {item.code && (
        <div className="mb-4">
          <CodeBlock code={item.code} language="python" title="Code Snippet" />
        </div>
      )}

      {/* Options List */}
      {item.options && (
        <div className="space-y-2.5 mb-4">
          {item.options.map((opt, optIdx) => {
            const isSelected = selectedOption === opt;
            const isActualAnswer = opt === item.correctAnswer;

            let optionClass = "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800";
            if (revealed) {
              if (isActualAnswer) {
                optionClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-100 font-bold shadow-xs";
              } else if (isSelected && !isActualAnswer) {
                optionClass = "border-rose-400 bg-rose-50 dark:bg-rose-950/60 text-rose-950 dark:text-rose-100 font-medium";
              }
            } else if (isSelected) {
              optionClass = "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-100 font-bold shadow-xs";
            }

            return (
              <button
                key={optIdx}
                onClick={() => setSelectedOption(opt)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm sm:text-base font-semibold transition flex items-center justify-between cursor-pointer ${optionClass}`}
              >
                <span>{opt}</span>
                {revealed && isActualAnswer && (
                  <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 ml-2" />
                )}
                {revealed && isSelected && !isActualAnswer && (
                  <XCircle size={18} className="text-rose-500 flex-shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={() => setRevealed(!revealed)}
          className="btn-vibrant-primary w-full sm:w-auto"
        >
          {revealed ? (
            <>
              <ChevronUp size={16} /> <span>Hide Explanation</span>
            </>
          ) : (
            <>
              <ChevronDown size={16} /> <span>Show Explanation</span>
            </>
          )}
        </button>

        {selectedOption && !revealed && (
          <span className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-bold">
            Option selected • Check answer!
          </span>
        )}
      </div>

      {/* Answer & Explanation Box */}
      {revealed && (
        <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 animate-in">
          <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
            <span className="text-emerald-600 dark:text-emerald-400">Correct Answer:</span>
            <span>{item.correctAnswer}</span>
          </div>
          <p className="body-base text-slate-700 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-700 m-0">
            <strong className="text-slate-900 dark:text-white block mb-1">Explanation:</strong>
            {item.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
