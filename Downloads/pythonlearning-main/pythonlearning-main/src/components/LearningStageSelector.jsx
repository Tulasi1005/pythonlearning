import React from "react";
import { LEARNING_STAGES } from "../data/learningStages";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export default function LearningStageSelector({
  selectedStage,
  onSelectStage,
  showTitle = true,
  layout = "grid" // "grid" | "compact" | "modal"
}) {
  return (
    <div className="learning-stage-selector w-full">
      {showTitle && (
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-3 shadow-2xs">
            <Sparkles size={16} />
            <span>Age-Adaptive Learning Engine</span>
          </div>
          <h2 className="heading-section text-slate-900 dark:text-white mb-2">
            Choose Your Learning Stage
          </h2>
          <p className="body-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            The same Python concepts, explained through examples that make sense to your age and background.
          </p>
        </div>
      )}

      <div className={`grid gap-4 ${
        layout === "compact" 
          ? "grid-cols-1 sm:grid-cols-5" 
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
      }`}>
        {LEARNING_STAGES.map((stage) => {
          const isSelected = selectedStage === stage.id;

          const borderStyle = isSelected
            ? "border-2 border-indigo-500 ring-4 ring-indigo-500/10 shadow-lg bg-white dark:bg-slate-900 scale-[1.02]"
            : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md";

          return (
            <div
              key={stage.id}
              onClick={() => onSelectStage(stage.id)}
              className={`stage-card p-5 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between relative group ${borderStyle}`}
            >
              {isSelected && (
                <div className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shadow-sm">
                  <Check size={14} strokeWidth={3} />
                </div>
              )}

              <div>
                {/* Icon & Age Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform select-none">
                    {stage.icon}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${stage.badgeBg}`}>
                    {stage.ageRange}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <span>{stage.label}</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {stage.shortDesc}
                </p>

                {/* Example Concept */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-4">
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">Focus:</span>
                  {stage.exampleConcept}
                </div>
              </div>

              {/* Select Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectStage(stage.id);
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
                    <span>Select Stage</span>
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
