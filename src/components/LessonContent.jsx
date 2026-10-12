import React, { useState, useEffect, useRef } from "react";
import CodeBlock from "./CodeBlock";
import VisualExplanation from "./VisualExplanation";
import LivePythonRunner from "./LivePythonRunner";
import ProgressRing from "./ProgressRing";
import ConfettiCelebration from "./ConfettiCelebration";
import TopicNotes from "./TopicNotes";
import { playCelebrationChime, playSuccessChime } from "../utils/audioCelebration";
import { LEARNING_STAGES, getStageById } from "../data/learningStages";
import { LEARNING_LANGUAGES, getLanguageById } from "../data/learningLanguages";
import { EXPLANATION_FORMATS, getFormatById } from "../data/explanationFormats";
import {
  getSectionForTopic,
  getNextSection,
  markTopicCompleted,
  isTopicCompleted,
  getCompletedTopics
} from "../data/allTopics";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Check,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  BookOpen,
  RotateCw,
  Layers,
  Code2,
  Brain,
  Zap,
  Terminal,
  ChevronRight,
  ChevronDown,
  Trophy,
  HelpCircle,
  Play,
  RotateCcw,
  CheckSquare,
  FileText,
  Bookmark,
  BookmarkCheck
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function LessonContent({
  topic,
  adjacent,
  onSelectTopic,
  onBackToLearn,
  selectedStage = "young",
  onSelectStage,
  onOpenStageModal,
  selectedLanguage = "english",
  onSelectLanguage,
  onOpenLanguageModal
}) {
  // Lesson steps: 'understand' | 'example' | 'code' | 'practice' | 'challenge' | 'complete'
  const [currentStep, setCurrentStep] = useState("understand");
  const [selectedFormat, setSelectedFormat] = useState("simple");
  const [formatMenuOpen, setFormatMenuOpen] = useState(false);
  const [completedTopicIds, setCompletedTopicIds] = useState(getCompletedTopics());
  const [showConfetti, setShowConfetti] = useState(false);

  const { toggleBookmark, isTopicBookmarked, toggleComplete, recordQuiz } = useAuth();
  const isBookmarked = isTopicBookmarked(topic.id);

  // Practice state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Challenge & Auto-Next state
  const [showHint, setShowHint] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [autoNextCountdown, setAutoNextCountdown] = useState(null);
  const [autoNextPaused, setAutoNextPaused] = useState(false);

  const containerRef = useRef(null);

  // Load section context
  const sectionMeta = getSectionForTopic(topic.id);
  const { section, topicIndex, totalTopics, isLastInSection } = sectionMeta;
  const nextSection = isLastInSection ? getNextSection(section.id) : null;

  // Reset or initialize state when topic changes
  useEffect(() => {
    setCurrentStep("understand");
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswerChecked(false);
    setShowHint(false);
    setChallengeCompleted(false);
    setShowConfetti(false);
    setAutoNextCountdown(null);
    setAutoNextPaused(false);
    setCompletedTopicIds(getCompletedTopics());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [topic.id]);

  // Resolve stage-specific content
  const stageObj =
    topic.stages?.[selectedStage] ||
    topic.stages?.young ||
    topic.stages?.college ||
    Object.values(topic.stages || {})[0] ||
    {};
  const currentStageMeta = getStageById(selectedStage);

  // Resolve language-specific content
  const langPkg =
    stageObj.languages?.[selectedLanguage] ||
    stageObj.languages?.english ||
    stageObj.languages?.["english-telugu"] ||
    Object.values(stageObj.languages || {})[0] ||
    stageObj;
  const currentLangMeta = getLanguageById(selectedLanguage);

  // Resolve narrative explanations
  const explanations = langPkg.explanations || {};
  const currentFormatMeta = getFormatById(selectedFormat);
  const activeNarrative =
    explanations[selectedFormat] ||
    explanations.simple ||
    langPkg.theory ||
    langPkg.explanation ||
    "Python makes this concept simple, clean, and reliable to understand.";

  const questions = langPkg.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const tryIt = langPkg.tryItYourself || {};

  // Extract key takeaways to offer as 1-click note additions
  const defaultKeyPoints = [
    langPkg.quickSummary,
    langPkg.realLifeExample,
    langPkg.theory ? `${topic.title}: ${langPkg.theory.slice(0, 90)}...` : null
  ].filter(Boolean);

  // Step transition helper
  const goToStep = (stepName) => {
    setCurrentStep(stepName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Practice handlers
  const handleCheckAnswer = () => {
    if (!selectedOption || !currentQuestion) return;
    const correct = selectedOption === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setAnswerChecked(true);
    if (correct) {
      playSuccessChime();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setAnswerChecked(false);
      setIsCorrect(false);
    } else {
      goToStep("challenge");
    }
  };

  const handleOpenNextChapter = () => {
    setAutoNextCountdown(null);
    if (adjacent.next) {
      onSelectTopic(adjacent.next.id);
    } else if (nextSection && nextSection.topics[0]) {
      onSelectTopic(nextSection.topics[0].id);
    } else {
      onBackToLearn();
    }
  };

  const handleCompleteChallenge = () => {
    setChallengeCompleted(true);
    markTopicCompleted(topic.id);
    toggleComplete(topic.id);
    recordQuiz(topic.id, 100);
    setCompletedTopicIds(getCompletedTopics());
    setShowConfetti(true);
    playCelebrationChime();
    goToStep("complete");

    // Automatically trigger next chapter countdown if next chapter exists
    if (adjacent.next || (nextSection && nextSection.topics[0])) {
      setAutoNextCountdown(4);
      setAutoNextPaused(false);
    }
  };

  // Auto-advance countdown timer
  useEffect(() => {
    if (autoNextCountdown === null || autoNextPaused || currentStep !== "complete") return;

    if (autoNextCountdown <= 1) {
      const timer = setTimeout(() => {
        handleOpenNextChapter();
      }, 1000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setAutoNextCountdown((prev) => (prev !== null && prev > 0 ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [autoNextCountdown, autoNextPaused, currentStep, adjacent.next, nextSection]);

  // Step pill definitions
  const steps = [
    { id: "understand", label: "1. Understand", icon: BookOpen },
    { id: "example", label: "2. Example", icon: Lightbulb },
    { id: "code", label: "3. Code", icon: Code2 },
    { id: "practice", label: "4. Practice", icon: CheckCircle2 },
    { id: "challenge", label: "5. Challenge", icon: Zap },
    { id: "complete", label: "6. Complete", icon: Trophy }
  ];

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);
  const progressPercent = Math.round(((topicIndex - 1 + (currentStepIndex + 1) / 6) / totalTopics) * 100);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 lg:py-8 animate-in" ref={containerRef}>
      {showConfetti && <ConfettiCelebration active={showConfetti} onComplete={() => setShowConfetti(false)} />}

      {/* Top Breadcrumb & Progress Header */}
      <div className="bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm mb-6 sticky top-18 z-20 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onBackToLearn}
              className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0"
              title="Return to curriculum modules"
            >
              <ArrowLeft size={16} />
              <span>{section.title}</span>
            </button>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
              Topic {topicIndex} of {totalTopics}
            </span>

            {adjacent.prev && (
              <button
                onClick={() => onSelectTopic(adjacent.prev.id)}
                className="ml-1 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/60 dark:hover:text-indigo-300 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
                title={`Back to: ${adjacent.prev.title}`}
              >
                <ArrowLeft size={13} />
                <span>Back to Previous</span>
              </button>
            )}
          </div>

          {/* Current Stage, Language & Bookmark Badges */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleBookmark(topic.id)}
              className={`notion-tag text-xs font-bold cursor-pointer transition flex items-center gap-1.5 ${
                isBookmarked
                  ? "bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700"
                  : "hover:border-indigo-500"
              }`}
              title={isBookmarked ? "Remove Bookmark" : "Bookmark this Lesson"}
            >
              {isBookmarked ? (
                <BookmarkCheck size={14} className="text-purple-600 dark:text-purple-400" />
              ) : (
                <Bookmark size={14} />
              )}
              <span>{isBookmarked ? "Saved" : "Save"}</span>
            </button>
            <button
              onClick={onOpenStageModal}
              className="notion-tag text-xs font-bold cursor-pointer hover:border-indigo-500 transition"
              title="Change Learning Stage"
            >
              <span>{currentStageMeta.icon}</span>
              <span>{currentStageMeta.label}</span>
            </button>
            <button
              onClick={onOpenLanguageModal}
              className="notion-tag text-xs font-bold cursor-pointer hover:border-indigo-500 transition"
              title="Change Explanation Language"
            >
              <span>{currentLangMeta.icon}</span>
              <span>{currentLangMeta.shortLabel}</span>
            </button>
          </div>
        </div>

        {/* Topic Title & Progress */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <h1 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {topic.title}
          </h1>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 self-start sm:self-auto shadow-2xs">
            {progressPercent}% Complete
          </span>
        </div>

        {/* Section Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
          <div
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 h-full transition-all duration-300 rounded-full"
            style={{ width: `${Math.max(5, progressPercent)}%` }}
          />
        </div>

        {/* Step Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isCurrent = st.id === currentStep;
            const isPassed = idx < currentStepIndex;

            return (
              <button
                key={st.id}
                onClick={() => goToStep(st.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer border ${
                  isCurrent
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-sm shadow-indigo-500/25"
                    : isPassed
                    ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {isPassed ? <Check size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Icon size={14} />}
                <span>{st.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Two-Column Layout (Learning Path Sidebar + Step Content) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Learning Path Sidebar (Desktop) */}
        <aside className="hidden lg:block lg:col-span-4 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm sticky top-48">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Curriculum Path
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[190px]">
                {section.title}
              </h3>
            </div>
            <ProgressRing percentage={progressPercent} size={42} strokeWidth={4} />
          </div>

          <div className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 scrollbar-thin">
            {section.topics.map((t, idx) => {
              const isCurrentTopic = t.id === topic.id;
              const isCompleted = completedTopicIds.includes(t.id);

              return (
                <button
                  key={t.id}
                  onClick={() => onSelectTopic(t.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between transition cursor-pointer border-none ${
                    isCurrentTopic
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs"
                      : isCompleted
                      ? "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    {isCompleted ? (
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Check size={12} />
                      </span>
                    ) : isCurrentTopic ? (
                      <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center text-xs shrink-0 font-bold">
                        {idx + 1}
                      </span>
                    )}
                    <span className="truncate">{t.title}</span>
                  </div>
                  {isCurrentTopic && <ChevronRight size={16} className="text-white shrink-0" />}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Step Content Container */}
        <main className="lg:col-span-8 space-y-6">
          {/* =======================================================
              STEP 1: 📖 UNDERSTAND
              ======================================================= */}
          {currentStep === "understand" && (
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-6 animate-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-300 flex items-center justify-center shadow-xs">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Step 1 of 6
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Understand the Concept</h2>
                  </div>
                </div>

                {/* Another Explanation Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setFormatMenuOpen(!formatMenuOpen)}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition cursor-pointer border border-slate-200 dark:border-slate-700 shadow-2xs"
                  >
                    <RotateCw size={14} className="text-indigo-600 dark:text-indigo-400" />
                    <span>{currentFormatMeta?.label || "Another Explanation"}</span>
                    <ChevronDown size={14} />
                  </button>

                  {formatMenuOpen && (
                    <div className="absolute right-0 mt-2 w-60 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-30 animate-in">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 block">
                        Choose Explanation Style:
                      </span>
                      {EXPLANATION_FORMATS.map((fmt) => (
                        <button
                          key={fmt.id}
                          onClick={() => {
                            setSelectedFormat(fmt.id);
                            setFormatMenuOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition cursor-pointer border-none ${
                            selectedFormat === fmt.id
                              ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold"
                              : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          <span className="text-base">{fmt.icon}</span>
                          <span>{fmt.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* What is it? & Why do we need it? Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {langPkg.whatIsIt && (
                  <div className="notion-callout notion-callout-blue">
                    <span className="text-2xl select-none">💡</span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 block mb-1">
                        What is it?
                      </span>
                      <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal m-0">
                        {langPkg.whatIsIt}
                      </p>
                    </div>
                  </div>
                )}
                {langPkg.whyDoWeNeedIt && (
                  <div className="notion-callout notion-callout-green">
                    <span className="text-2xl select-none">🎯</span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block mb-1">
                        Why do we need it?
                      </span>
                      <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal m-0">
                        {langPkg.whyDoWeNeedIt}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Detailed Narrative Explanation */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                  Detailed Explanation:
                </span>
                <p className="body-base text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line m-0">
                  {activeNarrative}
                </p>
              </div>

              {/* Important Points */}
              {langPkg.importantPoints && langPkg.importantPoints.length > 0 && (
                <div className="notion-callout notion-callout-purple">
                  <span className="text-2xl select-none">✨</span>
                  <div className="space-y-2 w-full">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-900 dark:text-purple-300 block">
                      Important Points to Remember:
                    </span>
                    <ul className="space-y-1.5 text-sm sm:text-base text-slate-800 dark:text-slate-200 m-0 p-0 list-none">
                      {langPkg.importantPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={16} className="text-purple-600 dark:text-purple-400 shrink-0 mt-1" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                {adjacent.prev ? (
                  <button
                    onClick={() => onSelectTopic(adjacent.prev.id)}
                    className="btn-vibrant-secondary w-full sm:w-auto"
                    title={`Go back to ${adjacent.prev.title}`}
                  >
                    <ArrowLeft size={16} />
                    <span>Previous: "{adjacent.prev.title}"</span>
                  </button>
                ) : (
                  <button
                    onClick={onBackToLearn}
                    className="btn-vibrant-secondary w-full sm:w-auto"
                  >
                    <ArrowLeft size={16} />
                    <span>Back to Curriculum</span>
                  </button>
                )}

                <button
                  onClick={() => goToStep("example")}
                  className="btn-vibrant-primary w-full sm:w-auto"
                >
                  <span>Continue to Example</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* =======================================================
              STEP 2: 💡 SEE AN EXAMPLE & VISUAL
              ======================================================= */}
          {currentStep === "example" && (
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-6 animate-in">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-xs">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Step 2 of 6
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Real-Life Example & Visual</h2>
                </div>
              </div>

              {/* Real-Life Metaphor Card */}
              {langPkg.realLifeExample && (
                <div className="notion-callout notion-callout-amber">
                  <span className="text-2xl select-none">🌍</span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 block mb-1">
                      Real-Life Situation:
                    </span>
                    <p className="body-base text-slate-800 dark:text-slate-200 leading-relaxed m-0">
                      {langPkg.realLifeExample}
                    </p>
                  </div>
                </div>
              )}

              {/* Visual Diagram */}
              {stageObj.visual && (
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                    Visual Diagram:
                  </span>
                  <VisualExplanation visual={stageObj.visual} selectedStage={selectedStage} />
                </div>
              )}

              {/* Common Mistakes & Fixes */}
              {langPkg.commonMistakes && (
                <div className="notion-callout notion-callout-rose">
                  <span className="text-2xl select-none">⚠️</span>
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300 block">
                      Common Mistake to Avoid:
                    </span>
                    <p className="text-sm sm:text-base text-slate-900 dark:text-slate-100 font-semibold m-0">
                      {langPkg.commonMistakes.mistake}
                    </p>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 m-0">
                      💡 <strong>Fix:</strong> {langPkg.commonMistakes.fix}
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => goToStep("understand")}
                  className="btn-vibrant-secondary w-full sm:w-auto"
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => goToStep("code")}
                  className="btn-vibrant-primary w-full sm:w-auto"
                >
                  <span>Continue to Python Code</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* =======================================================
              STEP 3: 🐍 LIVE PYTHON CODE RUNNER
              ======================================================= */}
          {currentStep === "code" && (
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-6 animate-in">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs">
                  <Code2 size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Step 3 of 6
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Live Python Code & Runner</h2>
                </div>
              </div>

              {/* Interactive In-Browser Python Runner */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <Play size={14} />
                  Interactive Code Playground (Edit & Run Live):
                </span>
                <LivePythonRunner
                  initialCode={langPkg.code || 'print("Hello Python!")'}
                  expectedOutput={langPkg.output || 'Hello Python!'}
                  title="Live Python Code Editor"
                />
              </div>

              {/* How it Works */}
              {langPkg.howItWorks && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1.5">
                    How it works under the hood:
                  </span>
                  <p className="body-base text-slate-800 dark:text-slate-200 leading-relaxed m-0">
                    {langPkg.howItWorks}
                  </p>
                </div>
              )}

              {/* Navigation Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => goToStep("example")}
                  className="btn-vibrant-secondary w-full sm:w-auto"
                >
                  <ArrowLeft size={16} />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => goToStep("practice")}
                  className="btn-vibrant-primary w-full sm:w-auto"
                >
                  <span>Try It & Practice</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* =======================================================
              STEP 4: 📝 PRACTICE
              ======================================================= */}
          {currentStep === "practice" && (
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-6 animate-in">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Step 4 of 6
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Practice Quiz</h2>
                  </div>
                </div>

                {questions.length > 0 && (
                  <span className="notion-tag font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                )}
              </div>

              {/* Render Question One by One */}
              {currentQuestion ? (
                <div className="space-y-5">
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug m-0">
                      {currentQuestion.question}
                    </h3>
                  </div>

                  {/* Options List */}
                  <div className="space-y-2.5">
                    {currentQuestion.options?.map((opt, i) => {
                      const isSelected = selectedOption === opt;
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            if (!answerChecked) {
                              setSelectedOption(opt);
                            }
                          }}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-xl text-sm sm:text-base font-semibold flex items-center gap-3 transition cursor-pointer border ${
                            isSelected
                              ? "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-500 text-indigo-900 dark:text-indigo-100 shadow-xs"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border ${
                              isSelected
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "border-slate-300 text-slate-500"
                            }`}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="flex-1 break-words">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Answer Feedback */}
                  {answerChecked && (
                    <div
                      className={`notion-callout ${
                        isCorrect ? "notion-callout-green" : "notion-callout-rose"
                      }`}
                    >
                      <span className="text-2xl select-none">{isCorrect ? "✅" : "⚠️"}</span>
                      <div className="space-y-1">
                        <span className="text-sm font-bold block">
                          {isCorrect ? "Correct! Excellent job." : "Not quite. Review explanation below:"}
                        </span>
                        <p className="body-base leading-relaxed m-0">{currentQuestion.explanation}</p>
                      </div>
                    </div>
                  )}

                  {/* Practice Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => goToStep("code")}
                      className="btn-vibrant-secondary w-full sm:w-auto"
                    >
                      <ArrowLeft size={16} />
                      <span>Back to Code</span>
                    </button>

                    {!answerChecked ? (
                      <button
                        onClick={handleCheckAnswer}
                        disabled={!selectedOption}
                        className="btn-vibrant-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="btn-vibrant-primary w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700"
                      >
                        <span>
                          {currentQuestionIndex < questions.length - 1
                            ? "Next Question →"
                            : "Continue to Challenge →"}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <p className="text-slate-600 dark:text-slate-400 text-base">Practice questions completed for this topic!</p>
                  <button
                    onClick={() => goToStep("challenge")}
                    className="btn-vibrant-primary w-full sm:w-auto"
                  >
                    Go to Challenge →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* =======================================================
              STEP 5: 🔥 HANDS-ON CHALLENGE (LIVE RUNNER)
              ======================================================= */}
          {currentStep === "challenge" && (
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-6 animate-in">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow-xs">
                  <Zap size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    Step 5 of 6
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Hands-on Challenge</h2>
                </div>
              </div>

              {/* Challenge Goal & Task */}
              <div className="notion-callout notion-callout-purple">
                <span className="text-2xl select-none">🎯</span>
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-900 dark:text-purple-300 block">
                    Challenge Objective:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white m-0">
                    {tryIt.goal || `Write code to put ${topic.title} into practice.`}
                  </p>
                  <p className="body-base text-slate-600 dark:text-slate-300 leading-relaxed m-0">
                    {tryIt.task || "Run the solution in the interactive playground below."}
                  </p>
                </div>
              </div>

              {/* Live Interactive Challenge Runner */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                  Interactive Challenge Workspace:
                </span>
                <LivePythonRunner
                  initialCode={tryIt.solution || tryIt.starterCode || langPkg.code}
                  expectedOutput={tryIt.expectedOutput || langPkg.output}
                  title="Challenge Playground"
                />
              </div>

              {/* Optional Hint Toggle */}
              <div>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition cursor-pointer flex items-center gap-1.5"
                >
                  <Lightbulb size={14} className="text-amber-600 dark:text-amber-400" />
                  <span>{showHint ? "Hide Hint" : "💡 Show Hint"}</span>
                </button>

                {showHint && (
                  <div className="mt-3 notion-callout notion-callout-amber animate-in">
                    <span className="text-xl select-none">💡</span>
                    <p className="body-base text-amber-950 dark:text-amber-200 m-0 font-medium">
                      {tryIt.hint || "Make sure your syntax has matching parentheses and quotes."}
                    </p>
                  </div>
                )}
              </div>

              {/* Challenge Completion Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => goToStep("practice")}
                  className="btn-vibrant-secondary w-full sm:w-auto"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Practice</span>
                </button>

                <button
                  onClick={handleCompleteChallenge}
                  className="btn-vibrant-primary w-full sm:w-auto"
                >
                  <span>Complete Challenge & Finish</span>
                  <CheckCircle2 size={18} />
                </button>
              </div>
            </div>
          )}

          {/* =======================================================
              STEP 6: 🎉 TOPIC COMPLETE & SECTION TRANSITION
              ======================================================= */}
          {currentStep === "complete" && (
            <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm text-center space-y-6 animate-in">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-md">
                <Trophy size={32} />
              </div>

              <div>
                <span className="notion-tag text-emerald-700 dark:text-emerald-300 font-bold mb-2">
                  🎉 Topic Mastered
                </span>
                <h2 className="heading-section text-slate-900 dark:text-white mt-2">
                  "{topic.title}" Complete!
                </h2>
                <p className="body-base text-slate-600 dark:text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                  You successfully understood the core concepts, studied real-world examples, verified live Python code, answered practice questions, and completed the hands-on challenge.
                </p>
              </div>

              {/* Automatic Next Chapter Countdown Indicator */}
              {(adjacent.next || (nextSection && nextSection.topics[0])) && autoNextCountdown !== null && (
                <div className="max-w-md mx-auto p-3.5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-violet-500/10 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between gap-3 animate-pulse">
                  <div className="flex items-center gap-2.5 text-left min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-extrabold flex items-center justify-center text-xs shrink-0 shadow-sm">
                      {autoNextCountdown}s
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-slate-900 dark:text-white truncate block">
                        Opening next: "{adjacent.next ? adjacent.next.title : nextSection.topics[0].title}"
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                        Auto-advancing to next chapter...
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => setAutoNextPaused(!autoNextPaused)}
                      className="text-xs font-bold text-slate-700 dark:text-slate-300 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer"
                    >
                      {autoNextPaused ? "Resume" : "Pause"}
                    </button>
                    <button
                      onClick={() => setAutoNextCountdown(null)}
                      className="text-xs font-bold text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
                      title="Stay on this lesson"
                    >
                      Stay Here
                    </button>
                  </div>
                </div>
              )}

              {/* All Chapters Done Message if final chapter */}
              {!adjacent.next && !nextSection && (
                <div className="max-w-md mx-auto p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-indigo-500/15 border border-amber-300 dark:border-amber-700">
                  <div className="text-xl font-extrabold text-slate-900 dark:text-white mb-1 flex items-center justify-center gap-2">
                    <Sparkles size={20} className="text-amber-500" />
                    <span>🎉 I AM DONE! 🎉</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
                    Congratulations! You have successfully finished all Python chapters!
                  </p>
                </div>
              )}

              {/* Completion Checklist */}
              <div className="max-w-md mx-auto p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-left space-y-2 text-sm sm:text-base text-slate-800 dark:text-slate-200 font-semibold">
                <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400">
                  <Check size={16} />
                  <span>Understood Concept & Logic</span>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400">
                  <Check size={16} />
                  <span>Visual & Real-Life Metaphor</span>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400">
                  <Check size={16} />
                  <span>Python Live Runner Execution</span>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400">
                  <Check size={16} />
                  <span>Completed Practice Quiz</span>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400">
                  <Check size={16} />
                  <span>Conquered the Challenge (+30 XP)</span>
                </div>
              </div>

              {/* Primary Navigation Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                  {adjacent.prev && (
                    <button
                      onClick={() => onSelectTopic(adjacent.prev.id)}
                      className="btn-vibrant-secondary w-full sm:w-auto"
                      title={`Go back to ${adjacent.prev.title}`}
                    >
                      <ArrowLeft size={18} />
                      <span>Previous Chapter: "{adjacent.prev.title}"</span>
                    </button>
                  )}

                  {adjacent.next ? (
                    <button
                      onClick={handleOpenNextChapter}
                      className="btn-vibrant-primary w-full sm:w-auto"
                    >
                      <span>Open Next Chapter: "{adjacent.next.title}"</span>
                      <ArrowRight size={18} />
                    </button>
                  ) : nextSection ? (
                    <button
                      onClick={handleOpenNextChapter}
                      className="btn-vibrant-primary w-full sm:w-auto"
                    >
                      <span>🎉 Start Next Section: "{nextSection.title}"</span>
                      <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={onBackToLearn}
                      className="btn-vibrant-primary w-full sm:w-auto"
                    >
                      <span>🏆 I am done! Back to Curriculum</span>
                    </button>
                  )}
                </div>

                <button
                  onClick={() => goToStep("understand")}
                  className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer bg-transparent border-none py-1 font-semibold"
                >
                  Review this topic again
                </button>
              </div>
            </div>
          )}

          {/* Persistent Topic Notes Section for noting important points */}
          <div className="pt-2">
            <TopicNotes
              topicId={topic.id}
              topicTitle={topic.title}
              defaultKeyPoints={defaultKeyPoints}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
