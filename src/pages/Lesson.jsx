import React, { useEffect } from "react";
import { getTopicById, getAdjacentTopics } from "../data/allTopics";
import LessonContent from "../components/LessonContent";
import { ArrowLeft } from "lucide-react";

export default function Lesson({
  topicId,
  onSelectTopic,
  onBackToLearn,
  selectedStage,
  onSelectStage,
  onOpenStageModal,
  selectedLanguage,
  onSelectLanguage,
  onOpenLanguageModal
}) {
  const topic = getTopicById(topicId);
  const adjacent = getAdjacentTopics(topicId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [topicId]);

  if (!topic) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Topic Not Found</h2>
        <p className="text-slate-600 text-sm mb-6">
          The requested Python lesson could not be located.
        </p>
        <button
          onClick={onBackToLearn}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#306998] text-white font-semibold text-sm cursor-pointer border-none"
        >
          <ArrowLeft size={16} />
          Return to Learn Page
        </button>
      </div>
    );
  }

  return (
    <LessonContent
      topic={topic}
      adjacent={adjacent}
      onSelectTopic={onSelectTopic}
      onBackToLearn={onBackToLearn}
      selectedStage={selectedStage}
      onSelectStage={onSelectStage}
      onOpenStageModal={onOpenStageModal}
      selectedLanguage={selectedLanguage}
      onSelectLanguage={onSelectLanguage}
      onOpenLanguageModal={onOpenLanguageModal}
    />
  );
}
