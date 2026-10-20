import React, { useState, useMemo } from "react";
import { practiceData } from "../data/practiceData";
import { LEARNING_STAGES, getStageById } from "../data/learningStages";
import { getLanguageById } from "../data/learningLanguages";
import QuestionCard from "../components/QuestionCard";
import PageBackButton from "../components/PageBackButton";
import { Code2, CheckCircle2, HelpCircle, Sparkles, Terminal } from "lucide-react";

export default function Practice({
  selectedStage = "young",
  onOpenStageModal,
  selectedLanguage = "english",
  onOpenLanguageModal,
  onBack
}) {
  const [activeStageFilter, setActiveStageFilter] = useState(selectedStage);
  const currentStageMeta = getStageById(selectedStage);
  const currentLangMeta = getLanguageById(selectedLanguage);

  // Filter questions based on stage
  const filteredQuestions = useMemo(() => {
    if (activeStageFilter === "all") return practiceData;
    return practiceData.filter((q) => q.stage === activeStageFilter);
  }, [activeStageFilter]);

  return (
    <div className="practice-page max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 md:py-10 animate-in">
      {/* Back Navigation Button */}
      {onBack && (
        <div className="mb-3 sm:mb-4 flex items-center justify-start">
          <PageBackButton onBack={onBack} label="Back" />
        </div>
      )}

      {/* Page Header */}
      <div className="mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl sm:text-4xl select-none">⚡</span>
          <h1 className="heading-section text-slate-900 dark:text-white">
            Interactive Practice
          </h1>
        </div>

        <p className="body-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-5">
          Solve interactive quizzes, output predictions, bug-finding puzzles, and coding challenges tailored for <strong>{currentStageMeta.label} ({currentStageMeta.ageRange})</strong> in <strong>{currentLangMeta.label}</strong>.
        </p>

        {/* Stage & Language Pill Indicators */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="notion-tag text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400">Stage:</span>
            <button
              onClick={onOpenStageModal}
              className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-transparent border-none p-0 ml-1"
            >
              {currentStageMeta.icon} {currentStageMeta.label}
            </button>
          </div>

          <div className="notion-tag text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400">Language:</span>
            <button
              onClick={onOpenLanguageModal}
              className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-transparent border-none p-0 ml-1"
            >
              {currentLangMeta.icon} {currentLangMeta.shortLabel}
            </button>
          </div>
        </div>
      </div>

      {/* Stage Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
        <button
          onClick={() => setActiveStageFilter("all")}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer border ${
            activeStageFilter === "all"
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-sm shadow-indigo-500/25"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800"
          }`}
        >
          All Stages ({practiceData.length})
        </button>

        {LEARNING_STAGES.map((st) => {
          const count = practiceData.filter((q) => q.stage === st.id).length;
          return (
            <button
              key={st.id}
              onClick={() => setActiveStageFilter(st.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer border ${
                activeStageFilter === st.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-sm shadow-indigo-500/25"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800"
              }`}
            >
              <span>{st.icon}</span>
              <span>{st.label} ({count})</span>
            </button>
          );
        })}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((item, index) => (
            <QuestionCard key={item.id || index} item={item} index={index} />
          ))
        ) : (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <HelpCircle size={36} className="mx-auto text-slate-400 mb-3" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              No questions found for this stage
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-4">
              Select 'All Stages' to view exercises across all levels.
            </p>
            <button
              onClick={() => setActiveStageFilter("all")}
              className="btn-vibrant-secondary"
            >
              View All Questions
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
