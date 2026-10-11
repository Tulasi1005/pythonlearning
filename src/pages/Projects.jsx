import React, { useState, useMemo } from "react";
import { projectsData } from "../data/projectsData";
import { LEARNING_STAGES, getStageById } from "../data/learningStages";
import { getLanguageById } from "../data/learningLanguages";
import ProjectCard from "../components/ProjectCard";
import { FolderGit2, Sparkles, Folder } from "lucide-react";

export default function Projects({
  selectedStage = "young",
  onOpenStageModal,
  selectedLanguage = "english",
  onOpenLanguageModal
}) {
  const [activeStageFilter, setActiveStageFilter] = useState(selectedStage);
  const currentStageMeta = getStageById(selectedStage);
  const currentLangMeta = getLanguageById(selectedLanguage);

  const filteredProjects = useMemo(() => {
    if (activeStageFilter === "all") return projectsData;
    return projectsData.filter((p) => p.stage === activeStageFilter);
  }, [activeStageFilter]);

  return (
    <div className="projects-page max-w-6xl mx-auto px-3 sm:px-6 py-8 sm:py-12 animate-in">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4">
          <div className="notion-tag text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400">Stage:</span>
            <button
              onClick={onOpenStageModal}
              className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-transparent border-none p-0 ml-1"
            >
              {currentStageMeta.icon} {currentStageMeta.label} ({currentStageMeta.ageRange})
            </button>
          </div>

          <div className="notion-tag text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400">Language:</span>
            <button
              onClick={onOpenLanguageModal}
              className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-transparent border-none p-0 ml-1"
            >
              {currentLangMeta.icon} {currentLangMeta.label}
            </button>
          </div>
        </div>

        <h1 className="heading-hero text-slate-900 dark:text-white mb-3">
          Age-Adapted Python Projects
        </h1>
        <p className="body-large text-slate-600 dark:text-slate-300 leading-relaxed">
          From fun toy bots for kids to production FastAPI microservices for professionals—build real software tailored to your stage.
        </p>
      </div>

      {/* Stage Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
        <button
          onClick={() => setActiveStageFilter("all")}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer border ${
            activeStageFilter === "all"
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-sm shadow-indigo-500/25"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800"
          }`}
        >
          All 25 Projects
        </button>

        {LEARNING_STAGES.map((st) => {
          const count = projectsData.filter((p) => p.stage === st.id).length;
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

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
