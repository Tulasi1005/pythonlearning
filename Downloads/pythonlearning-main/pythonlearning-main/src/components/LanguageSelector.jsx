import React from "react";
import { LEARNING_LANGUAGES } from "../data/learningLanguages";
import { Check, Globe, Sparkles, ArrowRight } from "lucide-react";

export default function LanguageSelector({
  selectedLanguage,
  onSelectLanguage,
  showTitle = true,
  layout = "grid" // "grid" | "compact" | "list"
}) {
  return (
    <div className="language-selector w-full">
      {showTitle && (
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-3 shadow-2xs">
            <Globe size={16} />
            <span>Multi-Language Learning Engine</span>
          </div>
          <h2 className="heading-section text-slate-900 dark:text-white mb-2">
            How do you want to learn?
          </h2>
          <p className="body-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Choose your preferred language style. You can switch your language anytime during any lesson!
          </p>
        </div>
      )}

      <div
        className={`grid gap-4 ${
          layout === "compact"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : layout === "list"
            ? "grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {LEARNING_LANGUAGES.map((lang) => {
          const isSelected = selectedLanguage === lang.id;

          const borderStyle = isSelected
            ? "border-2 border-indigo-500 ring-4 ring-indigo-500/10 shadow-lg bg-white dark:bg-slate-900 scale-[1.02]"
            : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md";

          return (
            <div
              key={lang.id}
              onClick={() => onSelectLanguage(lang.id)}
              className={`lang-card p-5 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between relative group ${borderStyle}`}
            >
              {isSelected && (
                <div className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shadow-sm">
                  <Check size={14} strokeWidth={3} />
                </div>
              )}

              <div>
                {/* Flag Icon & Short Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform select-none">
                    {lang.icon}
                  </span>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${lang.badgeBg}`}
                  >
                    {lang.shortLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <span>{lang.label}</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {lang.description}
                </p>

                {/* Tagline / Vibe */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-4 italic">
                  "{lang.tagline}"
                </div>
              </div>

              {/* Select Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectLanguage(lang.id);
                }}
                className={`w-full py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 cursor-pointer border-none ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200"
                }`}
              >
                {isSelected ? (
                  <>
                    <Check size={16} />
                    <span>Selected</span>
                  </>
                ) : (
                  <>
                    <span>Choose Language</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
