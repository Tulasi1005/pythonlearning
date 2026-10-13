import React, { useState, useEffect, useRef } from "react";
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

// Route resolution helpers for URL hash & history synchronization
function getRouteFromLocation() {
  const hash = typeof window !== "undefined" ? window.location.hash || "" : "";
  if (!hash || hash === "#" || hash === "#/" || hash === "#/home") {
    return { page: "home", topicId: "what-is-python" };
  }
  if (hash.startsWith("#/lesson")) {
    const cleanHash = hash.replace(/^#\/?/, "");
    const parts = cleanHash.split("?")[0].split("/");
    const topicFromPath = parts[1];
    const params = new URLSearchParams(hash.includes("?") ? hash.split("?")[1] : "");
    const topicId = topicFromPath || params.get("topic") || "what-is-python";
    return { page: "lesson", topicId };
  }
  if (hash.startsWith("#/learn")) return { page: "learn", topicId: "what-is-python" };
  if (hash.startsWith("#/practice")) return { page: "practice", topicId: "what-is-python" };
  if (hash.startsWith("#/projects")) return { page: "projects", topicId: "what-is-python" };
  if (hash.startsWith("#/about")) return { page: "about", topicId: "what-is-python" };
  if (hash.startsWith("#/auth") || hash.startsWith("#/login") || hash.startsWith("#/signup")) {
    return { page: "auth", topicId: "what-is-python" };
  }
  return { page: "home", topicId: "what-is-python" };
}

function getHashForRoute(page, topicId) {
  if (page === "home") return "#/home";
  if (page === "lesson") return `#/lesson/${topicId || "what-is-python"}`;
  if (page === "learn") return "#/learn";
  if (page === "practice") return "#/practice";
  if (page === "projects") return "#/projects";
  if (page === "about") return "#/about";
  if (page === "auth" || page === "login" || page === "signup") return "#/auth";
  return "#/home";
}

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
  
  // Initialize route from current URL hash
  const initialRoute = useRef(getRouteFromLocation()).current;
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [selectedTopicId, setSelectedTopicId] = useState(initialRoute.topicId);
  const [guestMode, setGuestMode] = useState(initialRoute.page !== "auth");
  
  // In-session navigation stack to track previous pages
  const navHistoryRef = useRef([{ page: initialRoute.page, topicId: initialRoute.topicId }]);
  const [historyDepth, setHistoryDepth] = useState(1);

  // Initialize or synchronize browser history entry on initial mount
  useEffect(() => {
    const targetHash = getHashForRoute(initialRoute.page, initialRoute.topicId);
    const stateObj = { page: initialRoute.page, topicId: initialRoute.topicId };
    if (!window.history.state || window.location.hash !== targetHash) {
      window.history.replaceState(stateObj, "", targetHash);
    }
  }, []);

  // Listen to popstate event (mobile back button, gesture swipe back, browser back)
  useEffect(() => {
    const handlePopState = (event) => {
      // If modal was open, close modal first and stay on current page
      if (stageModalOpen) {
        setStageModalOpen(false);
        return;
      }
      if (languageModalOpen) {
        setLanguageModalOpen(false);
        return;
      }

      // Read route from history state or URL hash
      let route = event.state;
      if (!route || !route.page) {
        route = getRouteFromLocation();
      }

      if (navHistoryRef.current.length > 1) {
        navHistoryRef.current.pop();
        setHistoryDepth(navHistoryRef.current.length);
      }

      if (route.page === "auth") {
        setGuestMode(false);
      } else {
        setGuestMode(true);
      }

      setCurrentPage(route.page);
      if (route.topicId) {
        setSelectedTopicId(route.topicId);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [stageModalOpen, languageModalOpen, setStageModalOpen, setLanguageModalOpen]);

  // Navigate to a page and record in browser history
  const navigateTo = (page, topicId = selectedTopicId, replace = false) => {
    if (page === "login" || page === "signup" || page === "auth") {
      setGuestMode(false);
      const hash = "#/auth";
      const stateObj = { page: "auth", topicId };
      if (replace) {
        window.history.replaceState(stateObj, "", hash);
      } else {
        window.history.pushState(stateObj, "", hash);
        navHistoryRef.current.push(stateObj);
        setHistoryDepth(navHistoryRef.current.length);
      }
      return;
    }

    setGuestMode(true);

    const hash = getHashForRoute(page, topicId);
    const stateObj = { page, topicId };

    if (replace) {
      window.history.replaceState(stateObj, "", hash);
      if (navHistoryRef.current.length > 0) {
        navHistoryRef.current[navHistoryRef.current.length - 1] = stateObj;
      } else {
        navHistoryRef.current = [stateObj];
      }
    } else {
      const lastEntry = navHistoryRef.current[navHistoryRef.current.length - 1];
      if (!lastEntry || lastEntry.page !== page || (page === "lesson" && lastEntry.topicId !== topicId)) {
        window.history.pushState(stateObj, "", hash);
        navHistoryRef.current.push(stateObj);
        setHistoryDepth(navHistoryRef.current.length);
      }
    }

    setCurrentPage(page);
    if (topicId) setSelectedTopicId(topicId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectTopic = (topicId) => {
    navigateTo("lesson", topicId);
  };

  const handleNavigate = (page) => {
    navigateTo(page);
  };

  // Back handler for both on-screen buttons and mobile navigation
  const handleBack = () => {
    if (stageModalOpen) {
      setStageModalOpen(false);
      return;
    }
    if (languageModalOpen) {
      setLanguageModalOpen(false);
      return;
    }

    if (navHistoryRef.current.length > 1) {
      window.history.back();
    } else {
      // Fallback hierarchy if user arrived directly or refreshed
      if (currentPage === "lesson") {
        navigateTo("learn", undefined, true);
      } else if (currentPage !== "home") {
        navigateTo("home", undefined, true);
      }
    }
  };

  const handleBackToLearn = () => {
    if (navHistoryRef.current.length > 1) {
      window.history.back();
    } else {
      navigateTo("learn", undefined, true);
    }
  };

  const canGoBack = historyDepth > 1 || currentPage !== "home";

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
        onContinueAsGuest={() => {
          setGuestMode(true);
          navigateTo("home", undefined, true);
        }}
        onSelectTopic={handleSelectTopic}
        onBack={navHistoryRef.current.length > 1 ? handleBack : () => {
          setGuestMode(true);
          navigateTo("home", undefined, true);
        }}
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
        onBack={handleBack}
        canGoBack={canGoBack}
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
            onBack={handleBack}
            canGoBack={historyDepth > 1}
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
            onBack={handleBack}
          />
        )}

        {currentPage === "lesson" && (
          <Lesson
            topicId={selectedTopicId}
            onSelectTopic={handleSelectTopic}
            onBackToLearn={handleBackToLearn}
            onBack={handleBack}
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
            onBack={handleBack}
          />
        )}

        {currentPage === "projects" && (
          <Projects
            selectedStage={selectedStage}
            onOpenStageModal={() => setStageModalOpen(true)}
            selectedLanguage={selectedLanguage}
            onOpenLanguageModal={() => setLanguageModalOpen(true)}
            onBack={handleBack}
          />
        )}

        {currentPage === "about" && (
          <About
            onNavigate={handleNavigate}
            onBack={handleBack}
          />
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
