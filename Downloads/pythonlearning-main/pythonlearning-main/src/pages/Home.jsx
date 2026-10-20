import React from "react";
import LearningStageSelector from "../components/LearningStageSelector";
import LanguageSelector from "../components/LanguageSelector";
import PageBackButton from "../components/PageBackButton";
import { getStageById } from "../data/learningStages";
import { getLanguageById } from "../data/learningLanguages";
import { useDictionary } from "../context/DictionaryContext";
import {
  Code2,
  Terminal,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Layers,
  Cpu,
  Globe,
  Bot,
  Compass,
  Repeat,
  Boxes,
  RotateCw,
  Search,
  BookMarked,
  Flame,
  ShieldCheck
} from "lucide-react";

export default function Home({
  onNavigate,
  onSelectTopic,
  selectedStage,
  onSelectStage,
  selectedLanguage,
  onSelectLanguage,
  onOpenStageModal,
  onOpenLanguageModal,
  onBack,
  canGoBack
}) {
  const { openDictionary } = useDictionary();
  const currentStageMeta = getStageById(selectedStage);
  const currentLangMeta = getLanguageById(selectedLanguage);

  const featuredTopics = [
    {
      id: "variables",
      title: "Variables & Memory Binding",
      section: "Python Basics",
      icon: Code2,
      color: "from-blue-500 to-indigo-500",
      desc: "How Python names, binds, and stores information in memory."
    },
    {
      id: "for-loop",
      title: "Loops & Iterations",
      section: "Control Flow",
      icon: Repeat,
      color: "from-amber-500 to-orange-500",
      desc: "Repeat actions automatically and traverse sequence collections."
    },
    {
      id: "what-is-a-function",
      title: "Functions & Parameters",
      section: "Modular Logic",
      icon: Boxes,
      color: "from-emerald-500 to-teal-500",
      desc: "Build reusable blocks of code and encapsulate logic cleanly."
    },
    {
      id: "what-is-oop",
      title: "Classes & OOP",
      section: "Object-Oriented Python",
      icon: Cpu,
      color: "from-purple-500 to-indigo-600",
      desc: "Model real-world entities with classes, methods, and state."
    },
    {
      id: "what-is-an-api",
      title: "APIs & Web Services",
      section: "Web & Networking",
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      desc: "Connect Python to modern web APIs and cloud microservices."
    },
    {
      id: "what-is-ai",
      title: "AI & Large Language Models",
      section: "Modern AI & LLMs",
      icon: Bot,
      color: "from-rose-500 to-pink-600",
      desc: "Explore generative AI, prompt engineering, and embeddings."
    }
  ];

  const corePillars = [
    {
      icon: "🎯",
      title: "Adaptive Age Stages",
      desc: "From 5-year-old toy box stories to professional enterprise software architectures across 5 distinct age levels."
    },
    {
      icon: "🗣️",
      title: "4 Explanation Languages",
      desc: "Choose between Professional English, Friend-style English+Telugu mix, Pure Telugu, or Simple Hindi."
    },
    {
      icon: "🔄",
      title: "Another Explanation Modes",
      desc: "Switch instantly to Story, Real-life, Friend, Visual Diagram, Step-by-Step, or Analogy formats with one click!"
    }
  ];

  return (
    <div className="home-page-container max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 md:py-10 animate-in">
      {/* Back Navigation Button if navigated from elsewhere */}
      {canGoBack && onBack && (
        <div className="mb-3 sm:mb-4 flex items-center justify-start">
          <PageBackButton onBack={onBack} label="Back to Previous Page" />
        </div>
      )}

      {/* 1. HERO SECTION */}
      <div className="mb-12 pb-10 border-b border-slate-200 dark:border-slate-800">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-bold mb-5 shadow-2xs">
          <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
          <span>Interactive Adaptive Python Platform</span>
        </div>

        <h1 className="heading-hero mb-4 text-slate-900 dark:text-white">
          Learn Python with <br className="hidden sm:inline" />
          <span className="gradient-text-primary">
            Adaptive Explanations
          </span>
        </h1>

        <p className="body-large text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
          A step-by-step programming curriculum designed for complete beginners to experts, adapted to your age stage and native language preferences.
        </p>

        {/* Selected Config Cards */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 max-w-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800/60">
            <span className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-semibold flex items-center gap-2">
              <span className="text-lg">🎯</span> Current Learning Stage:
            </span>
            <button
              onClick={onOpenStageModal}
              className="inline-flex items-center justify-between sm:justify-start gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 text-xs sm:text-sm font-bold cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition shadow-2xs"
            >
              <span>{currentStageMeta.icon} {currentStageMeta.label} ({currentStageMeta.ageRange})</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-extrabold underline ml-1">Change</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800/60">
            <span className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-semibold flex items-center gap-2">
              <span className="text-lg">🗣️</span> Explanation Language:
            </span>
            <button
              onClick={onOpenLanguageModal}
              className="inline-flex items-center justify-between sm:justify-start gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 text-xs sm:text-sm font-bold cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition shadow-2xs"
            >
              <span>{currentLangMeta.icon} {currentLangMeta.label}</span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-extrabold underline ml-1">Change</span>
            </button>
          </div>

          <div className="flex items-center justify-between gap-2 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <span>📚</span> Full Curriculum:
            </span>
            <span className="font-bold text-slate-900 dark:text-slate-200">18 Sections • 120 Interactive Topics</span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mt-8">
          <button
            onClick={() => onNavigate("learn")}
            className="btn-vibrant-primary"
          >
            <span>Explore Curriculum</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => onNavigate("practice")}
            className="btn-vibrant-secondary"
          >
            <Compass size={18} className="text-indigo-600 dark:text-indigo-400" />
            <span>Interactive Practice</span>
          </button>

          <button
            onClick={() => openDictionary()}
            className="btn-vibrant-secondary"
          >
            <Search size={18} className="text-blue-600 dark:text-blue-400" />
            <span>Word Meaning Lookup</span>
          </button>
        </div>
      </div>

      {/* 2. CORE PILLARS */}
      <div className="mb-14">
        <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2">
          <Sparkles size={16} />
          <span>How This Adaptive Guide Works</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {corePillars.map((p, idx) => (
            <div key={idx} className="modern-card p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <span className="text-3xl block mb-3">{p.icon}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. STAGE SELECTOR BLOCK */}
      <div className="mb-14 pb-10 border-b border-slate-200 dark:border-slate-800">
        <LearningStageSelector
          selectedStage={selectedStage}
          onSelectStage={onSelectStage}
          showTitle={true}
        />
      </div>

      {/* 4. LANGUAGE SELECTOR BLOCK */}
      <div className="mb-14 pb-10 border-b border-slate-200 dark:border-slate-800">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onSelectLanguage={onSelectLanguage}
          showTitle={true}
        />
      </div>

      {/* 5. FEATURED TOPICS */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="heading-section text-slate-900 dark:text-white">
              Curriculum Highlights
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
              Customized for <strong>{currentStageMeta.label} ({currentStageMeta.ageRange})</strong> in <strong>{currentLangMeta.label}</strong>.
            </p>
          </div>

          <button
            onClick={() => onNavigate("learn")}
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 hover:underline cursor-pointer bg-transparent border-none p-0"
          >
            <span>View All 18 Sections</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTopics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onSelectTopic(item.id)}
                className="modern-card p-5 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="notion-tag text-xs font-bold text-slate-700 dark:text-slate-300">
                      {item.section}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-xs">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  <span>Start Reading</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
