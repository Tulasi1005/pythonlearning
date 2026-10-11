import React, { useState, useMemo } from "react";
import { SECTIONS, allTopics } from "../data/allTopics";
import TopicCard from "../components/TopicCard";
import { getStageById } from "../data/learningStages";
import { getLanguageById } from "../data/learningLanguages";
import { Search, BookOpen, Layers, X, Sparkles, Folder } from "lucide-react";

export default function Learn({
  onSelectTopic,
  selectedStage = "young",
  onOpenStageModal,
  selectedLanguage = "english",
  onSelectLanguage,
  onOpenLanguageModal
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState("all");
  const stageMeta = getStageById(selectedStage);
  const langMeta = getLanguageById(selectedLanguage);

  // Filtered topics based on search query or selected section
  const filteredTopics = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      if (selectedSection === "all") return null; // Show standard section groups
      const sec = SECTIONS.find((s) => s.id === selectedSection);
      return sec ? sec.topics : [];
    }

    return allTopics.filter((topic) => {
      const titleMatch = topic.title.toLowerCase().includes(query);
      const stageData = topic.stages?.[selectedStage] || {};
      const langData = stageData.languages?.[selectedLanguage] || stageData.languages?.english || {};
      const stageIntro = (langData.intro || stageData.intro || "").toLowerCase().includes(query);
      const sectionMatch = topic.sectionTitle?.toLowerCase().includes(query);
      const idMatch = topic.id.toLowerCase().includes(query);
      return titleMatch || stageIntro || sectionMatch || idMatch;
    });
  }, [searchQuery, selectedSection, selectedStage, selectedLanguage]);

  return (
    <div className="learn-page max-w-6xl mx-auto px-3 sm:px-6 py-8 sm:py-12 animate-in">
      {/* Page Header */}
      <div className="mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl sm:text-4xl select-none">📖</span>
          <h1 className="heading-section text-slate-900 dark:text-white">
            Python Curriculum
          </h1>
        </div>

        <p className="body-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-5">
          Complete curriculum of {SECTIONS.length} sections and {allTopics.length} interactive topics, adapted for <strong>{stageMeta.label} ({stageMeta.ageRange})</strong> in <strong>{langMeta.label}</strong>.
        </p>

        {/* Stage & Language Pill Switchers */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="notion-tag text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400">Stage:</span>
            <button
              onClick={onOpenStageModal}
              className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-transparent border-none p-0 ml-1"
            >
              {stageMeta.icon} {stageMeta.label}
            </button>
          </div>

          <div className="notion-tag text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400">Language:</span>
            <button
              onClick={onOpenLanguageModal}
              className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-transparent border-none p-0 ml-1"
            >
              {langMeta.icon} {langMeta.shortLabel}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mb-6 relative">
        <div className="relative flex items-center">
          <Search
            size={18}
            className="absolute left-3.5 text-slate-400 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics (e.g. loops, variables, functions, oop, apis)..."
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-400 outline-none transition bg-white dark:bg-slate-900 text-sm sm:text-base text-slate-900 dark:text-slate-100 placeholder-slate-400 shadow-xs focus:shadow-md focus:shadow-indigo-500/10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer bg-transparent border-none"
              title="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Section Quick Filters */}
      {!searchQuery && (
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          <button
            onClick={() => setSelectedSection("all")}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer border ${
              selectedSection === "all"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-sm shadow-indigo-500/25"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800"
            }`}
          >
            All 18 Sections ({allTopics.length})
          </button>
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition cursor-pointer border ${
                selectedSection === sec.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-sm shadow-indigo-500/25"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800"
              }`}
            >
              {sec.title.split("—")[1] || sec.title} ({sec.topics.length})
            </button>
          ))}
        </div>
      )}

      {/* Topics Display Area */}
      {filteredTopics ? (
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
              Found {filteredTopics.length} topic{filteredTopics.length === 1 ? "" : "s"}
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-sm text-indigo-600 dark:text-indigo-400 font-bold hover:underline bg-transparent border-none cursor-pointer"
              >
                Clear filter
              </button>
            )}
          </div>

          {filteredTopics.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <BookOpen size={36} className="mx-auto text-slate-400 mb-3" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                No matching topics found
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-4">
                Try searching for keywords like 'variable', 'loop', 'list', or 'function'.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSection("all");
                }}
                className="btn-vibrant-secondary"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  selectedStage={selectedStage}
                  selectedLanguage={selectedLanguage}
                  onSelectTopic={onSelectTopic}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-12">
          {SECTIONS.map((section) => (
            <section key={section.id}>
              <div className="flex items-center gap-3 mb-4 pb-2.5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-mono text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  {section.number}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 ml-auto font-semibold">
                  {section.topics.length} Lessons
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.topics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    selectedStage={selectedStage}
                    selectedLanguage={selectedLanguage}
                    onSelectTopic={onSelectTopic}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
