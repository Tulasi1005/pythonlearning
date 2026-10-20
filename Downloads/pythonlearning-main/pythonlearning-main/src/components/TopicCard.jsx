import React from "react";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { getStageById } from "../data/learningStages";
import { getLanguageById } from "../data/learningLanguages";

export default function TopicCard({
  topic,
  onSelect,
  onSelectTopic,
  selectedStage = "young",
  selectedLanguage = "english"
}) {
  const selectHandler = onSelectTopic || onSelect;
  const stageData = topic.stages?.[selectedStage] || topic.stages?.young || topic;
  const langData = stageData.languages?.[selectedLanguage] || stageData.languages?.english || stageData;
  const stageMeta = getStageById(selectedStage);
  const langMeta = getLanguageById(selectedLanguage);

  const previewText =
    langData.intro ||
    stageData.intro ||
    topic.shortDescription ||
    "Learn and master this core Python concept.";

  return (
    <div
      onClick={() => selectHandler && selectHandler(topic.id)}
      className="modern-card group p-5 cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="notion-tag text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800">
            #{topic.topicNumber}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[150px]">
            {topic.sectionTitle?.split("—")[1]?.trim() || topic.sectionId}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-2">
          {topic.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 leading-relaxed mb-3">
          {previewText}
        </p>
      </div>

      <div className="mt-2 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400">
        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-semibold">
          <FileText size={14} />
          <span>{stageMeta.label} • {langMeta.shortLabel}</span>
        </span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}
