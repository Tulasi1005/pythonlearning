import React, { useState } from "react";
import CodeBlock from "./CodeBlock";
import { FolderGit2, Check, ChevronDown, ChevronUp, Layers, ListChecks, PlayCircle } from "lucide-react";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const difficultyColors = {
    Beginner: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    Intermediate: "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    Advanced: "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
  };

  return (
    <div className="modern-card overflow-hidden transition-all duration-200">
      <div className="p-5 sm:p-7">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold border ${
              difficultyColors[project.difficulty] || "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            }`}
          >
            {project.difficulty}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-bold font-mono">
            <FolderGit2 size={16} />
            <span>Interactive Project</span>
          </div>
        </div>

        {/* Project Name */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
          {project.name}
        </h3>

        {/* Description */}
        <p className="body-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Skills Used */}
        <div className="mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
            <Layers size={14} />
            Skills Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.skillsUsed.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Toggle Details Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn-vibrant-secondary w-full text-xs sm:text-sm"
        >
          {expanded ? (
            <>
              <ChevronUp size={18} /> <span>Hide Specifications & Code</span>
            </>
          ) : (
            <>
              <ChevronDown size={18} /> <span>View Requirements, Steps & Code</span>
            </>
          )}
        </button>
      </div>

      {/* Expanded Details Section */}
      {expanded && (
        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-5 sm:p-7 space-y-6 animate-in">
          {/* Requirements */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
              <ListChecks size={16} className="text-indigo-600 dark:text-indigo-400" />
              Project Requirements
            </h4>
            <ul className="space-y-2 list-none m-0 p-0">
              {project.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                  <Check size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expected Result */}
          {project.expectedResult && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <PlayCircle size={16} className="text-emerald-500" />
                Expected Result / Console Output
              </h4>
              <div className="p-4 bg-slate-950 text-emerald-400 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 shadow-md">
                <pre className="m-0">{project.expectedResult}</pre>
              </div>
            </div>
          )}

          {/* Basic Implementation Steps */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
              Basic Implementation Steps
            </h4>
            <ol className="space-y-2.5 list-none m-0 p-0">
              {project.basicImplementationSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 border border-indigo-200 dark:border-indigo-800">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Starter Code Snippet */}
          {project.codeSnippet && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                Starter Implementation Code
              </h4>
              <CodeBlock code={project.codeSnippet} language="python" title={`${project.name}.py`} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
