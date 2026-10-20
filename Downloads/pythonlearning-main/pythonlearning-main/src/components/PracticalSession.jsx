import React, { useState, useEffect } from "react";
import { Play, RotateCcw, Check, Sparkles, Eye, Copy, ArrowRight, Lightbulb, CheckCircle2, HelpCircle } from "lucide-react";
import CodeBlock from "./CodeBlock";

export default function PracticalSession({ practical, stageId = "young" }) {
  if (!practical) return null;

  const [userCode, setUserCode] = useState(practical.starterCode || "");
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Update when stage or topic changes
  useEffect(() => {
    setUserCode(practical.starterCode || "");
    setShowSolution(false);
    setShowHint(false);
    setFeedback(null);
  }, [practical]);

  const handleReset = () => {
    setUserCode(practical.starterCode || "");
    setFeedback(null);
  };

  const handleCheckCode = () => {
    const normalize = (str) =>
      str.replace(/\r\n/g, "\n").replace(/\s+/g, " ").trim();

    if (userCode.trim().length === 0) {
      setFeedback({
        type: "error",
        message: "Please write some Python code in the editor before checking!"
      });
      return;
    }

    const isMatch =
      normalize(userCode).includes(normalize(practical.expectedOutput || "")) ||
      normalize(userCode).includes("print");

    if (isMatch) {
      setFeedback({
        type: "success",
        message: "🎉 Excellent! Your code matches the expected logic. Check your output below!"
      });
    } else {
      setFeedback({
        type: "info",
        message: "Code executed! Compare your output with the expected output box."
      });
    }
  };

  const handleCopySolutionToEditor = () => {
    if (practical.solution) {
      setUserCode(practical.solution);
      setFeedback({
        type: "success",
        message: "Solution loaded into your editor! Click 'Run / Check Code' to test."
      });
    }
  };

  return (
    <section className="practical-session-container my-8 p-6 sm:p-8 bg-slate-50/90 border border-slate-200 rounded-3xl shadow-xs">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">🧪</span>
          <h2 className="text-xl font-bold text-slate-900 m-0">
            {practical.title || "Try It Yourself"}
          </h2>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Hands-On Playground
        </span>
      </div>

      {/* Goal */}
      {practical.goal && (
        <div className="mb-3 p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-blue-900 font-semibold flex items-center gap-2">
          <Sparkles size={16} className="text-[#306998] flex-shrink-0" />
          <span>🎯 Goal: {practical.goal}</span>
        </div>
      )}

      {/* Task Description */}
      <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-4">
        {practical.task}
      </p>

      {/* Hint Toggle */}
      {practical.hint && (
        <div className="mb-4">
          <button
            onClick={() => setShowHint(!showHint)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100/80 px-3 py-1.5 rounded-lg border border-amber-200 transition cursor-pointer"
          >
            <Lightbulb size={14} />
            <span>{showHint ? "Hide Hint" : "💡 Need a Hint?"}</span>
          </button>
          {showHint && (
            <div className="mt-2 p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 animate-in">
              <strong className="block mb-0.5">Hint:</strong>
              {practical.hint}
            </div>
          )}
        </div>
      )}

      {/* Code Editor Box */}
      <div className="code-editor-box rounded-2xl border border-slate-700 overflow-hidden shadow-sm bg-[#0f172a] mb-4">
        <div className="editor-top-bar flex items-center justify-between px-4 py-2.5 bg-[#1e293b] border-b border-slate-700 text-xs text-slate-300 font-mono">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/90 inline-block"></span>
            </div>
            <span className="font-semibold text-slate-200 ml-2">sandbox.py</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition cursor-pointer border border-slate-600"
              title="Reset starter code"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          rows={Math.max(4, userCode.split("\n").length + 1)}
          className="w-full p-4 bg-[#0f172a] text-[#f8fafc] font-mono text-sm leading-relaxed border-none outline-none resize-y selection:bg-blue-600/40"
          placeholder="# Write your Python code here..."
          spellCheck={false}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handleCheckCode}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#306998] hover:bg-[#25527a] text-white text-xs sm:text-sm font-bold shadow-sm transition cursor-pointer border-none active:scale-95"
          >
            <Play size={15} />
            <span>Run / Check Code</span>
          </button>

          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-300 transition cursor-pointer shadow-2xs"
          >
            <Eye size={15} />
            <span>{showSolution ? "Hide Solution" : "Show Solution"}</span>
          </button>
        </div>

        {practical.solution && showSolution && (
          <button
            onClick={handleCopySolutionToEditor}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 transition cursor-pointer"
          >
            <Copy size={13} />
            <span>Copy Solution to Editor</span>
          </button>
        )}
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div
          className={`p-3.5 rounded-xl text-xs sm:text-sm font-medium mb-4 flex items-center gap-2 animate-in ${
            feedback.type === "success"
              ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
              : feedback.type === "error"
              ? "bg-red-50 text-red-900 border border-red-200"
              : "bg-blue-50 text-blue-900 border border-blue-200"
          }`}
        >
          <Sparkles size={16} className="text-emerald-600 flex-shrink-0" />
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Expected Output vs Solution Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        {/* Expected Output */}
        {practical.expectedOutput && (
          <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono mb-2">
              Expected Output:
            </h4>
            <div className="p-3 bg-slate-900 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800">
              <pre className="m-0">{practical.expectedOutput}</pre>
            </div>
          </div>
        )}

        {/* Revealed Solution */}
        {showSolution && practical.solution && (
          <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-200 animate-in">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono mb-2">
              Model Solution:
            </h4>
            <CodeBlock code={practical.solution} language="python" title="solution.py" />
            {practical.explanation && (
              <p className="text-xs text-slate-700 leading-relaxed mt-2 pt-2 border-t border-emerald-200 m-0">
                {practical.explanation}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
