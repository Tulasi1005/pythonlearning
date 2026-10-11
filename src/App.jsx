import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StageSelectorModal from "./components/StageSelectorModal";
import LanguageSelectorModal from "./components/LanguageSelectorModal";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Lesson from "./pages/Lesson";
import Practice from "./pages/Practice";
import Projects from "./pages/Projects";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import { getStoredStage, saveStage } from "./data/learningStages";
import { getStoredLanguage, saveLanguage } from "./data/learningLanguages";
import { DictionaryProvider } from "./context/DictionaryContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AuthModal from "./components/Auth/AuthModal";
import GlobalWordMeaningModal from "./components/WordMeaning/GlobalWordMeaningModal";
import FloatingDictionaryButton from "./components/FloatingDictionaryButton";
import { RefreshCw } from "lucide-react";

function MainAppShell({
  selectedStage,
  handleSelectStage,
  selectedLanguage,
  handleSelectLanguage,
  stageModalOpen,
  setStageModalOpen,
  languageModalOpen,
  setLanguageModalOpen
}) {
  const { isAuthenticated, isLoadingSession } = useAuth();
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedTopicId, setSelectedTopicId] = useState("what-is-python");
  const [guestMode, setGuestMode] = useState(false);

  const handleSelectTopic = (topicId) => {
    setSelectedTopicId(topicId);
    setCurrentPage("lesson");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (page) => {
    if (page === "login" || page === "signup") {
      setGuestMode(false);
      return;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToLearn = () => {
    setCurrentPage("learn");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // While checking PostgreSQL session on startup
  if (isLoadingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white text-xl font-bold font-mono shadow-lg shadow-indigo-500/25 animate-pulse">
            <span className="text-amber-300">Py</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <RefreshCw size={14} className="animate-spin text-indigo-500" />
            <span>Connecting to Learning Engine...</span>
          </div>
        </div>
      </div>
    );
  }

  // FIRST SCREEN: If not logged in and not exploring as guest, show the dedicated Login & Signup Page!
  if (!isAuthenticated && !guestMode) {
    return (
      <AuthPage
        onContinueAsGuest={() => setGuestMode(true)}
        onSelectTopic={handleSelectTopic}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20 dark:selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200 font-sans antialiased relative transition-colors duration-200">
      {/* Navbar with Stage, Language, Theme, Dictionary & Auth Controls */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handleNavigate}
        onSelectTopic={handleSelectTopic}
        selectedStage={selectedStage}
        onOpenStageModal={() => setStageModalOpen(true)}
        selectedLanguage={selectedLanguage}
        onOpenLanguageModal={() => setLanguageModalOpen(true)}
        onShowAuthPage={() => setGuestMode(false)}
      />

      {/* Stage Selector Modal */}
      <StageSelectorModal
        isOpen={stageModalOpen}
        onClose={() => setStageModalOpen(false)}
        selectedStage={selectedStage}
        onSelectStage={handleSelectStage}
      />

      {/* Language Selector Modal */}
      <LanguageSelectorModal
        isOpen={languageModalOpen}
        onClose={() => setLanguageModalOpen(false)}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguage}
      />

      {/* Global Authentication Modal */}
      <AuthModal onSelectTopic={handleSelectTopic} />

      {/* Main Content Area across all pages */}
      <main className="flex-1">
        {currentPage === "home" && (
          <Home
            onNavigate={handleNavigate}
            onSelectTopic={handleSelectTopic}
            selectedStage={selectedStage}
            onSelectStage={handleSelectStage}
            selectedLanguage={selectedLanguage}
            onSelectLanguage={handleSelectLanguage}
            onOpenStageModal={() => setStageModalOpen(true)}
            onOpenLanguageModal={() => setLanguageModalOpen(true)}
          />
        )}

        {currentPage === "learn" && (
          <Learn
            onSelectTopic={handleSelectTopic}
            selectedStage={selectedStage}
            onOpenStageModal={() => setStageModalOpen(true)}
            selectedLanguage={selectedLanguage}
            onSelectLanguage={handleSelectLanguage}
            onOpenLanguageModal={() => setLanguageModalOpen(true)}
          />
        )}

        {currentPage === "lesson" && (
          <Lesson
            topicId={selectedTopicId}
            onSelectTopic={handleSelectTopic}
            onBackToLearn={handleBackToLearn}
            selectedStage={selectedStage}
            onSelectStage={handleSelectStage}
            onOpenStageModal={() => setStageModalOpen(true)}
            selectedLanguage={selectedLanguage}
            onSelectLanguage={handleSelectLanguage}
            onOpenLanguageModal={() => setLanguageModalOpen(true)}
          />
        )}

        {currentPage === "practice" && (
          <Practice
            selectedStage={selectedStage}
            onOpenStageModal={() => setStageModalOpen(true)}
            selectedLanguage={selectedLanguage}
            onOpenLanguageModal={() => setLanguageModalOpen(true)}
          />
        )}

        {currentPage === "projects" && (
          <Projects
            selectedStage={selectedStage}
            onOpenStageModal={() => setStageModalOpen(true)}
            selectedLanguage={selectedLanguage}
            onOpenLanguageModal={() => setLanguageModalOpen(true)}
          />
        )}

        {currentPage === "about" && (
          <About onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Word Meaning Dictionary Modal & Floating Search Trigger */}
      <GlobalWordMeaningModal />
      <FloatingDictionaryButton />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  const [selectedStage, setSelectedStage] = useState(getStoredStage());
  const [selectedLanguage, setSelectedLanguage] = useState(getStoredLanguage());
  const [stageModalOpen, setStageModalOpen] = useState(false);
  const [languageModalOpen, setLanguageModalOpen] = useState(false);

  const handleSelectStage = (stageId) => {
    setSelectedStage(stageId);
    saveStage(stageId);
  };

  const handleSelectLanguage = (langId) => {
    setSelectedLanguage(langId);
    saveLanguage(langId);
  };

  return (
    <ThemeProvider>
      <AuthProvider onSyncStage={handleSelectStage} onSyncLanguage={handleSelectLanguage}>
        <DictionaryProvider selectedLanguage={selectedLanguage} selectedStage={selectedStage}>
          <MainAppShell
            selectedStage={selectedStage}
            handleSelectStage={handleSelectStage}
            selectedLanguage={selectedLanguage}
            handleSelectLanguage={handleSelectLanguage}
            stageModalOpen={stageModalOpen}
            setStageModalOpen={setStageModalOpen}
            languageModalOpen={languageModalOpen}
            setLanguageModalOpen={setLanguageModalOpen}
          />
        </DictionaryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
