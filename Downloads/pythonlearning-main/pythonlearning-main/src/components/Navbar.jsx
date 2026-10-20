import React, { useState, useRef, useEffect } from "react";
import {
  BookOpen,
  Code,
  Terminal,
  FolderGit2,
  Info,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  User,
  LogIn,
  Sparkles,
  Bookmark,
  CheckCircle,
  LogOut,
  Flame,
  Settings,
  ArrowLeft,
  Check,
  Globe
} from "lucide-react";
import { LEARNING_STAGES, getStageById } from "../data/learningStages";
import { LEARNING_LANGUAGES, getLanguageById } from "../data/learningLanguages";
import { useDictionary } from "../context/DictionaryContext";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { AVATAR_OPTIONS } from "../services/authService";

export default function Navbar({
  currentPage,
  setCurrentPage,
  onSelectTopic,
  selectedStage,
  onSelectStage,
  onOpenStageModal,
  selectedLanguage = "english",
  onSelectLanguage,
  onOpenLanguageModal,
  onShowAuthPage,
  onBack,
  canGoBack
}) {
  const { openDictionary } = useDictionary();
  const { theme, toggleTheme, isDark } = useTheme();
  const { currentUser, isAuthenticated, openAuthModal, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [stageDropdownOpen, setStageDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const userMenuRef = useRef(null);
  const stageMenuRef = useRef(null);
  const langMenuRef = useRef(null);

  const stageMeta = getStageById(selectedStage);
  const langMeta = getLanguageById(selectedLanguage);

  const navItems = [
    { id: "home", label: "Home", icon: Terminal },
    { id: "learn", label: "Learn", icon: BookOpen },
    { id: "practice", label: "Practice", icon: Code },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "about", label: "About", icon: Info },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
    setStageDropdownOpen(false);
    setLangDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
      if (stageMenuRef.current && !stageMenuRef.current.contains(e.target)) {
        setStageDropdownOpen(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userAvatarMeta = AVATAR_OPTIONS.find(
    (a) => a.id === currentUser?.avatar
  ) || AVATAR_OPTIONS[0];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 min-w-0">
          {/* Back Button (shown on all subpages) */}
          {currentPage !== "home" && onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer shadow-2xs transition shrink-0 active:scale-95 group"
              title="Go to previous page"
              aria-label="Go back"
            >
              <ArrowLeft size={16} className="text-indigo-600 dark:text-indigo-400 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Back</span>
            </button>
          )}

          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-1.5 sm:gap-2.5 text-left group bg-transparent border-none cursor-pointer p-0.5 sm:p-1 rounded-lg transition shrink-0 min-w-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
              <span className="font-extrabold text-sm sm:text-base font-mono text-amber-300">Py</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-xs sm:text-base md:text-lg text-slate-900 dark:text-white tracking-tight leading-tight truncate max-w-[85px] xs:max-w-[130px] sm:max-w-none">
                Python Adaptive
              </span>
              <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 leading-tight hidden sm:block">
                Interactive Guide
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation & Controls (>=768px) */}
        <div className="navbar-desktop-menu items-center gap-1.5 lg:gap-2">
          <nav className="flex items-center gap-1 mr-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                currentPage === item.id ||
                (item.id === "learn" && currentPage === "lesson");
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition cursor-pointer border-none ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-indigo-500/25"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-white" : "text-slate-400 dark:text-slate-400"} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="h-5 w-[1px] bg-slate-200 dark:bg-slate-800 mx-0.5"></div>

          {/* Learning Stage Pill with Interactive Dropdown */}
          <div className="relative" ref={stageMenuRef}>
            <button
              onClick={() => {
                setStageDropdownOpen(!stageDropdownOpen);
                setLangDropdownOpen(false);
                setUserDropdownOpen(false);
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer shadow-xs ${
                stageDropdownOpen
                  ? "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300"
                  : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-700"
              }`}
              title="Click to switch learning stage (age)"
              aria-expanded={stageDropdownOpen}
              aria-haspopup="true"
            >
              <span className="text-base select-none">{stageMeta.icon}</span>
              <span className="truncate max-w-[85px]">{stageMeta.label}</span>
              <ChevronDown
                size={14}
                className={`text-slate-400 transition-transform duration-200 ${
                  stageDropdownOpen ? "rotate-180 text-indigo-600 dark:text-indigo-400" : ""
                }`}
              />
            </button>

            {/* Stage Quick Switch Dropdown */}
            {stageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-2 z-50 animate-in">
                <div className="px-2.5 py-1.5 mb-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Learning Stage (Age)
                  </span>
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                    {stageMeta.label}
                  </span>
                </div>

                <div className="space-y-1">
                  {LEARNING_STAGES.map((stg) => {
                    const isSelected = selectedStage === stg.id;
                    return (
                      <button
                        key={stg.id}
                        onClick={() => {
                          if (onSelectStage) onSelectStage(stg.id);
                          setStageDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition cursor-pointer border ${
                          isSelected
                            ? "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-950 dark:text-indigo-200 font-bold"
                            : "hover:bg-slate-100 dark:hover:bg-slate-800/80 border-transparent text-slate-700 dark:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-xl shrink-0 select-none">{stg.icon}</span>
                          <div className="min-w-0">
                            <div className="text-xs font-bold leading-tight truncate">
                              {stg.label}
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight truncate">
                              {stg.ageRange} • {stg.shortDesc.slice(0, 30)}...
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 ml-1.5">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-1.5 mt-1 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => {
                      setStageDropdownOpen(false);
                      if (onOpenStageModal) onOpenStageModal();
                    }}
                    className="w-full py-1.5 px-2 text-[11px] font-bold text-center text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-transparent border-none"
                  >
                    View All Stage Details & Cards →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Language Selector Pill with Interactive Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setStageDropdownOpen(false);
                setUserDropdownOpen(false);
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer shadow-xs ${
                langDropdownOpen
                  ? "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300"
                  : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-700"
              }`}
              title="Click to switch explanation language"
              aria-expanded={langDropdownOpen}
              aria-haspopup="true"
            >
              <span className="text-base select-none">{langMeta.icon}</span>
              <span>{langMeta.shortLabel}</span>
              <ChevronDown
                size={14}
                className={`text-slate-400 transition-transform duration-200 ${
                  langDropdownOpen ? "rotate-180 text-indigo-600 dark:text-indigo-400" : ""
                }`}
              />
            </button>

            {/* Language Quick Switch Dropdown */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-2 z-50 animate-in">
                <div className="px-2.5 py-1.5 mb-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Globe size={13} className="text-indigo-500" />
                    <span>Learning Language</span>
                  </div>
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                    {langMeta.shortLabel}
                  </span>
                </div>

                <div className="space-y-1">
                  {LEARNING_LANGUAGES.map((lang) => {
                    const isSelected = selectedLanguage === lang.id;
                    return (
                      <button
                        key={lang.id}
                        onClick={() => {
                          if (onSelectLanguage) onSelectLanguage(lang.id);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition cursor-pointer border ${
                          isSelected
                            ? "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-950 dark:text-indigo-200 font-bold"
                            : "hover:bg-slate-100 dark:hover:bg-slate-800/80 border-transparent text-slate-700 dark:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-xl shrink-0 select-none">{lang.icon}</span>
                          <div className="min-w-0">
                            <div className="text-xs font-bold leading-tight truncate">
                              {lang.label}
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight truncate">
                              {lang.shortLabel} • {lang.description.slice(0, 36)}...
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 ml-1.5">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-1.5 mt-1 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => {
                      setLangDropdownOpen(false);
                      if (onOpenLanguageModal) onOpenLanguageModal();
                    }}
                    className="w-full py-1.5 px-2 text-[11px] font-bold text-center text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer bg-transparent border-none"
                  >
                    View Full Multi-Language Guide →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Dictionary Action */}
          <button
            onClick={() => openDictionary()}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition cursor-pointer shadow-xs"
            title="Open Global Word Meaning Dictionary"
          >
            <BookOpen size={15} />
            <span>Meaning</span>
          </button>

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer border border-slate-200 dark:border-slate-700 shadow-xs"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-slate-700" />}
          </button>

          {/* Auth State Button / User Dropdown */}
          <div className="relative ml-0.5" ref={userMenuRef}>
            {isAuthenticated && currentUser ? (
              <>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500/10 to-blue-500/10 hover:from-indigo-500/20 hover:to-blue-500/20 border border-indigo-200 dark:border-indigo-800/80 text-slate-900 dark:text-slate-100 transition cursor-pointer shadow-xs"
                  title="Your Learning Profile & Settings"
                >
                  <span className="text-lg leading-none">{userAvatarMeta.emoji}</span>
                  <span className="text-xs font-bold truncate max-w-[90px]">
                    {currentUser.name.split(" ")[0]}
                  </span>
                  <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 text-[10px] font-extrabold">
                    <Sparkles size={10} />
                    <span>{currentUser.stats?.xp || 0}</span>
                  </div>
                  <ChevronDown size={13} className="text-slate-400" />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-2 z-50 animate-in">
                    {/* User Info Header */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700/60 mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xl shadow-sm">
                          {userAvatarMeta.emoji}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {currentUser.name}
                          </h4>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                            {currentUser.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-200/80 dark:border-slate-700/80 text-[11px]">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">Stage:</span>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">
                          {getStageById(currentUser.stage).label}
                        </span>
                      </div>
                    </div>

                    {/* Progress Summary Pill */}
                    <div className="grid grid-cols-2 gap-1 mb-1.5 text-center">
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300">
                        <div className="text-xs font-extrabold flex items-center justify-center gap-1">
                          <CheckCircle size={12} />
                          <span>{(currentUser.stats?.completedTopics || []).length}</span>
                        </div>
                        <div className="text-[9px] font-semibold uppercase">Lessons</div>
                      </div>
                      <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900 text-purple-700 dark:text-purple-300">
                        <div className="text-xs font-extrabold flex items-center justify-center gap-1">
                          <Bookmark size={12} />
                          <span>{(currentUser.stats?.bookmarkedTopics || []).length}</span>
                        </div>
                        <div className="text-[9px] font-semibold uppercase">Saved</div>
                      </div>
                    </div>

                    {/* Menu Actions */}
                    <div className="space-y-0.5">
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          openAuthModal("profile");
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer border-none text-left"
                      >
                        <User size={15} className="text-indigo-500" />
                        <span>My Profile & Stats</span>
                      </button>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onOpenStageModal();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer border-none text-left"
                      >
                        <Settings size={15} className="text-slate-500" />
                        <span>Change Learning Stage</span>
                      </button>

                      <div className="my-1 border-t border-slate-100 dark:border-slate-800"></div>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          logout();
                          if (onShowAuthPage) onShowAuthPage();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer border-none text-left"
                      >
                        <LogOut size={15} />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    if (onShowAuthPage) {
                      onShowAuthPage();
                    } else {
                      openAuthModal("login");
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer border-none"
                >
                  <LogIn size={15} />
                  <span>Sign In</span>
                </button>
                <button
                  onClick={() => {
                    if (onShowAuthPage) {
                      onShowAuthPage();
                    } else {
                      openAuthModal("signup");
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xs shadow-indigo-500/20 transition cursor-pointer border-none"
                >
                  <Sparkles size={14} />
                  <span>Sign Up</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile / Compact Controls (<768px, optimized for 280px-480px) */}
        <div className="navbar-mobile-menu items-center gap-1 sm:gap-1.5 shrink-0">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 cursor-pointer shadow-2xs"
            title="Toggle theme"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* User Profile Avatar / Login Icon on Mobile */}
          {isAuthenticated && currentUser ? (
            <button
              onClick={() => openAuthModal("profile")}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 cursor-pointer shadow-2xs text-base"
              title="Profile & Stats"
            >
              {userAvatarMeta.emoji}
            </button>
          ) : (
            <button
              onClick={() => openAuthModal("login")}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 cursor-pointer shadow-2xs"
              title="Sign In"
            >
              <LogIn size={15} />
            </button>
          )}

          {/* Stage switch quick pill */}
          <button
            onClick={onOpenStageModal}
            className="h-8 sm:h-9 px-1.5 sm:px-2.5 hidden xs:flex items-center gap-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 cursor-pointer shadow-2xs shrink-0"
            title="Switch Learning Stage"
          >
            <span className="text-sm">{stageMeta.icon}</span>
            <span className="hidden sm:inline">{stageMeta.label}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer shadow-2xs"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-3 sm:px-4 pt-3 pb-5 shadow-xl animate-in">
          {/* Quick Back Action in Drawer */}
          {currentPage !== "home" && onBack && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBack();
              }}
              className="w-full mb-3 flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-700 cursor-pointer shadow-2xs hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              <ArrowLeft size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span>← Back to Previous Page</span>
            </button>
          )}

          {/* User Card if Authenticated or Login/Signup CTA */}
          {isAuthenticated && currentUser ? (
            <div className="p-3 mb-3 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-200/80 dark:border-indigo-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{userAvatarMeta.emoji}</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    {currentUser.name}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">
                      ✨ {currentUser.stats?.xp || 0} XP
                    </span>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      ✓ {(currentUser.stats?.completedTopics || []).length} done
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAuthModal("profile");
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-xs cursor-pointer border-none"
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                    if (onShowAuthPage) onShowAuthPage();
                  }}
                  className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold cursor-pointer border-none"
                  title="Sign Out"
                >
                  <LogOut size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onShowAuthPage) onShowAuthPage();
                  else openAuthModal("login");
                }}
                className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5"
              >
                <LogIn size={14} />
                <span>Sign In</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onShowAuthPage) onShowAuthPage();
                  else openAuthModal("signup");
                }}
                className="py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Sparkles size={14} />
                <span>Sign Up</span>
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl shrink-0">{stageMeta.icon}</span>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-semibold">Stage</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 truncate block">{stageMeta.label}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStageModal();
                }}
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 py-1.5 px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer text-center hover:bg-slate-50 shadow-2xs shrink-0"
              >
                Change
              </button>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl shrink-0">{langMeta.icon}</span>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-semibold">Language</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 truncate block">{langMeta.label}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLanguageModal();
                }}
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 py-1.5 px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer text-center hover:bg-slate-50 shadow-2xs shrink-0"
              >
                Change
              </button>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                currentPage === item.id ||
                (item.id === "learn" && currentPage === "lesson");
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold transition cursor-pointer border-none ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon size={18} className={isActive ? "text-white" : "text-slate-400 dark:text-slate-400"} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
