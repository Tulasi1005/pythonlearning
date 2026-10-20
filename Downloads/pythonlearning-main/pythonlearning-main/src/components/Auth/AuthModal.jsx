import React, { useState, useEffect } from "react";
import {
  X,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Flame,
  Award,
  BookOpen,
  Bookmark,
  CheckCircle,
  LogOut,
  Settings,
  HelpCircle,
  RefreshCw,
  Trash2,
  Smile
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { LEARNING_STAGES, getStageById } from "../../data/learningStages";
import { LEARNING_LANGUAGES, getLanguageById } from "../../data/learningLanguages";
import { AVATAR_OPTIONS } from "../../services/authService";

export default function AuthModal({ onSelectTopic }) {
  const {
    currentUser,
    isAuthModalOpen,
    authModalMode,
    authNotice,
    closeAuthModal,
    setAuthModalMode,
    login,
    signup,
    logout,
    updateProfile,
    resetPassword,
    deleteAccount
  } = useAuth();

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRemember, setLoginRemember] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Signup form state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [signupStage, setSignupStage] = useState("young");
  const [signupLanguage, setSignupLanguage] = useState("english");
  const [signupAvatar, setSignupAvatar] = useState("snake_blue");
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  // Profile Edit form state
  const [editName, setEditName] = useState("");
  const [editBio, setEditBio] = useState("");
  const [editStage, setEditStage] = useState("young");
  const [editLanguage, setEditLanguage] = useState("english");
  const [editAvatar, setEditAvatar] = useState("snake_blue");
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Forgot password form state
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotNewPassword, setForgotNewPassword] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);

  // Feedback states
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Sync profile edit fields when user logs in
  useEffect(() => {
    if (currentUser) {
      setEditName(currentUser.name || "");
      setEditBio(currentUser.bio || "");
      setEditStage(currentUser.stage || "young");
      setEditLanguage(currentUser.language || "english");
      setEditAvatar(currentUser.avatar || "snake_blue");
    }
  }, [currentUser]);

  // Clear messages when mode or open state changes
  useEffect(() => {
    setErrorMsg("");
    setSuccessMsg("");
    setForgotSuccess(false);
  }, [authModalMode, isAuthModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isAuthModalOpen) {
        closeAuthModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAuthModalOpen, closeAuthModal]);

  if (!isAuthModalOpen) return null;

  // Password strength calculation
  const getPasswordStrength = (pass) => {
    if (!pass) return { score: 0, label: "", color: "bg-slate-200" };
    let score = 0;
    if (pass.length >= 6) score += 1;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass) && /[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 1) return { score: 25, label: "Weak", color: "bg-rose-500", text: "text-rose-500" };
    if (score === 2) return { score: 50, label: "Fair", color: "bg-amber-500", text: "text-amber-500" };
    if (score === 3) return { score: 75, label: "Good", color: "bg-blue-500", text: "text-blue-500" };
    return { score: 100, label: "Strong", color: "bg-emerald-500", text: "text-emerald-500" };
  };

  const passwordStrength = getPasswordStrength(signupPassword);

  // Submit Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
      await login({
        emailOrUsername: loginEmail,
        password: loginPassword,
        rememberMe: loginRemember
      });
      setSuccessMsg("Welcome back!");
    } catch (err) {
      setErrorMsg(err.message || "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

  // Quick Demo Login
  const handleQuickDemo = async (demoEmail, demoPass) => {
    setErrorMsg("");
    setIsLoading(true);
    try {
      await login({
        emailOrUsername: demoEmail,
        password: demoPass,
        rememberMe: true
      });
    } catch (err) {
      setErrorMsg(err.message || "Demo login failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Submit Sign Up
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (signupPassword !== signupConfirmPassword) {
      setErrorMsg("Passwords do not match. Please verify.");
      return;
    }

    setIsLoading(true);

    try {
      await signup({
        name: signupName,
        email: signupEmail,
        password: signupPassword,
        stage: signupStage,
        language: signupLanguage,
        avatar: signupAvatar,
        bio: `Python explorer in ${getStageById(signupStage).label} stage.`
      });
      setSuccessMsg("Account created successfully!");
    } catch (err) {
      setErrorMsg(err.message || "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  // Submit Profile Update
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
      await updateProfile({
        name: editName,
        bio: editBio,
        stage: editStage,
        language: editLanguage,
        avatar: editAvatar
      });
      setIsEditingProfile(false);
      setSuccessMsg("Profile details updated successfully!");
    } catch (err) {
      setErrorMsg(err.message || "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  // Submit Forgot Password
  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      await resetPassword(forgotEmail, forgotNewPassword);
      setForgotSuccess(true);
      setSuccessMsg("Password reset successfully! You can now log in.");
    } catch (err) {
      setErrorMsg(err.message || "Password reset failed");
    } finally {
      setIsLoading(false);
    }
  };

  const selectedAvatarMeta =
    AVATAR_OPTIONS.find((a) => a.id === (currentUser?.avatar || signupAvatar)) ||
    AVATAR_OPTIONS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-in">
      <div
        className="relative w-full max-w-lg bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon / Banner */}
        <div className="relative px-6 pt-6 pb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shrink-0">
          <button
            onClick={closeAuthModal}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer border-none"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner border border-white/20">
              {authModalMode === "profile"
                ? selectedAvatarMeta.emoji
                : authModalMode === "signup"
                ? "✨"
                : authModalMode === "forgot"
                ? "🔑"
                : "🐍"}
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white tracking-tight leading-tight">
                {authModalMode === "login" && "Welcome Back!"}
                {authModalMode === "signup" && "Create Python Account"}
                {authModalMode === "profile" && "Your Learning Profile"}
                {authModalMode === "forgot" && "Reset Password"}
              </h2>
              <p className="text-xs text-indigo-100 font-medium mt-0.5">
                {authModalMode === "login" && "Sign in to save your learning progress, XP & bookmarks."}
                {authModalMode === "signup" && "Join Python Adaptive to customize your personalized journey."}
                {authModalMode === "profile" && "Manage your learning stage, stats, and stored account details."}
                {authModalMode === "forgot" && "Enter your email to update your account password."}
              </p>
            </div>
          </div>

          {/* Tab Switcher if not on Profile mode */}
          {authModalMode !== "profile" && (
            <div className="flex bg-black/20 p-1 rounded-xl mt-4 border border-white/15">
              <button
                type="button"
                onClick={() => setAuthModalMode("login")}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition text-center cursor-pointer border-none ${
                  authModalMode === "login"
                    ? "bg-white text-indigo-950 shadow-sm"
                    : "text-white/80 hover:text-white bg-transparent"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setAuthModalMode("signup")}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition text-center cursor-pointer border-none ${
                  authModalMode === "signup"
                    ? "bg-white text-indigo-950 shadow-sm"
                    : "text-white/80 hover:text-white bg-transparent"
                }`}
              >
                Create Account
              </button>
            </div>
          )}
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 py-5 flex-1 space-y-4">
          {/* Action notice if triggered from a bookmark/progress button */}
          {authNotice && !currentUser && (
            <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-start gap-2.5 text-amber-800 dark:text-amber-200 text-xs">
              <Sparkles size={16} className="shrink-0 mt-0.5 text-amber-600" />
              <span>{authNotice}</span>
            </div>
          )}

          {/* Error & Success alerts */}
          {errorMsg && (
            <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex items-center gap-2.5 text-rose-700 dark:text-rose-300 text-xs animate-shake">
              <AlertCircle size={16} className="shrink-0 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2.5 text-emerald-800 dark:text-emerald-200 text-xs">
              <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* ============================================================ */}
          {/* MODE: SIGN IN FORM */}
          {/* ============================================================ */}
          {authModalMode === "login" && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email or Username
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="alex@example.com or Alex Johnson"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setAuthModalMode("forgot")}
                    className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline bg-transparent border-none cursor-pointer p-0"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-transparent border-none cursor-pointer p-1"
                  >
                    {showLoginPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={loginRemember}
                    onChange={(e) => setLoginRemember(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                  />
                  <span>Remember my session</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 transition cursor-pointer border-none flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw size={16} className="animate-spin" />
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              {/* Quick Demo Test Accounts Box */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2">
                  <Sparkles size={13} className="text-amber-500" />
                  <span>Quick 1-Click Demo Accounts</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickDemo("alex@example.com", "password123")}
                    className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-left transition cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900 dark:text-slate-100">
                      <span>🐍</span>
                      <span>Alex (College)</span>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      alex@example.com
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemo("priya@example.com", "password123")}
                    className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-left transition cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900 dark:text-slate-100">
                      <span>✨</span>
                      <span>Priya (Graduate)</span>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      priya@example.com
                    </div>
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* ============================================================ */}
          {/* MODE: SIGN UP FORM */}
          {/* ============================================================ */}
          {authModalMode === "signup" && (
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    required
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    required
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Password & Strength Bar */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    required
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-transparent border-none cursor-pointer p-1"
                  >
                    {showSignupPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {signupPassword && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">
                        Strength
                      </span>
                      <span className={`font-bold ${passwordStrength.text}`}>
                        {passwordStrength.label}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                        style={{ width: `${passwordStrength.score}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    required
                    value={signupConfirmPassword}
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                    placeholder="Re-enter password"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Pick Learning Stage & Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Target Stage
                  </label>
                  <select
                    value={signupStage}
                    onChange={(e) => setSignupStage(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    {LEARNING_STAGES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.icon} {s.label} ({s.ageRange})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Preferred Language
                  </label>
                  <select
                    value={signupLanguage}
                    onChange={(e) => setSignupLanguage(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    {LEARNING_LANGUAGES.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.icon} {l.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Avatar Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Choose Avatar Icon
                </label>
                <div className="flex flex-wrap gap-2">
                  {AVATAR_OPTIONS.map((a) => (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => setSignupAvatar(a.id)}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition cursor-pointer border ${
                        signupAvatar === a.id
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-md scale-110"
                          : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:scale-105"
                      }`}
                      title={a.label}
                    >
                      {a.emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Sign Up Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 transition cursor-pointer border-none flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw size={16} className="animate-spin" />
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span>Create Account & Start Learning</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* ============================================================ */}
          {/* MODE: FORGOT PASSWORD */}
          {/* ============================================================ */}
          {authModalMode === "forgot" && (
            <form onSubmit={handleForgotSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Registered Account Email
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    required
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Set New Password
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="password"
                    required
                    value={forgotNewPassword}
                    onChange={(e) => setForgotNewPassword(e.target.value)}
                    placeholder="Enter at least 6 characters"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setAuthModalMode("login")}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition cursor-pointer border-none"
                >
                  Back to Sign In
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md transition cursor-pointer border-none flex items-center justify-center gap-1.5"
                >
                  {isLoading ? <RefreshCw size={14} className="animate-spin" /> : "Save New Password"}
                </button>
              </div>
            </form>
          )}

          {/* ============================================================ */}
          {/* MODE: USER PROFILE & LEARNING PROGRESS */}
          {/* ============================================================ */}
          {authModalMode === "profile" && currentUser && (
            <div className="space-y-4">
              {/* Profile Card Header */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-blue-50/70 dark:from-indigo-950/30 dark:to-slate-800/60 border border-indigo-100 dark:border-indigo-900/50">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-3xl shadow-lg shadow-indigo-500/20">
                      {selectedAvatarMeta.emoji}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                        {currentUser.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        {currentUser.email}
                      </p>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                          {getStageById(currentUser.stage).icon} {getStageById(currentUser.stage).label}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          {getLanguageById(currentUser.language).icon} {getLanguageById(currentUser.language).shortLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                    className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer shadow-xs shrink-0"
                    title={isEditingProfile ? "Cancel editing" : "Edit Profile"}
                  >
                    <Settings size={16} />
                  </button>
                </div>

                {currentUser.bio && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 pt-2.5 border-t border-indigo-100/80 dark:border-slate-700/60 italic">
                    "{currentUser.bio}"
                  </p>
                )}
              </div>

              {/* Learning Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-center">
                  <div className="flex items-center justify-center gap-1 text-amber-600 dark:text-amber-400 mb-0.5">
                    <Sparkles size={16} />
                    <span className="font-extrabold text-base">{currentUser.stats?.xp || 0}</span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                    Total XP
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-orange-50/80 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/60 text-center">
                  <div className="flex items-center justify-center gap-1 text-orange-600 dark:text-orange-400 mb-0.5">
                    <Flame size={16} />
                    <span className="font-extrabold text-base">{currentUser.stats?.streakDays || 1}d</span>
                  </div>
                  <span className="text-[10px] font-bold text-orange-800 dark:text-orange-300 uppercase tracking-wider">
                    Streak
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 mb-0.5">
                    <CheckCircle size={16} />
                    <span className="font-extrabold text-base">
                      {(currentUser.stats?.completedTopics || []).length}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                    Completed
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 text-center">
                  <div className="flex items-center justify-center gap-1 text-purple-600 dark:text-purple-400 mb-0.5">
                    <Bookmark size={16} />
                    <span className="font-extrabold text-base">
                      {(currentUser.stats?.bookmarkedTopics || []).length}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider">
                    Saved
                  </span>
                </div>
              </div>

              {/* Edit Profile Form (Expanded on Settings toggle) */}
              {isEditingProfile ? (
                <form onSubmit={handleProfileUpdate} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3.5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <Settings size={14} className="text-indigo-600" />
                    <span>Edit Profile Details</span>
                  </h4>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Display Name
                    </label>
                    <input
                      type="text"
                      required
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-slate-100"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Bio / Goal
                    </label>
                    <input
                      type="text"
                      value={editBio}
                      onChange={(e) => setEditBio(e.target.value)}
                      placeholder="e.g. Learning Python for data science"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-slate-100"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Learning Stage
                      </label>
                      <select
                        value={editStage}
                        onChange={(e) => setEditStage(e.target.value)}
                        className="w-full px-2.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100"
                      >
                        {LEARNING_STAGES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.icon} {s.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Language
                      </label>
                      <select
                        value={editLanguage}
                        onChange={(e) => setEditLanguage(e.target.value)}
                        className="w-full px-2.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100"
                      >
                        {LEARNING_LANGUAGES.map((l) => (
                          <option key={l.id} value={l.id}>
                            {l.icon} {l.shortLabel}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Avatar Picker */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Change Avatar
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {AVATAR_OPTIONS.map((a) => (
                        <button
                          key={a.id}
                          type="button"
                          onClick={() => setEditAvatar(a.id)}
                          className={`w-8 h-8 rounded-xl flex items-center justify-center text-base transition cursor-pointer border ${
                            editAvatar === a.id
                              ? "bg-indigo-600 border-indigo-600 text-white shadow-sm scale-110"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:scale-105"
                          }`}
                        >
                          {a.emoji}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditingProfile(false)}
                      className="flex-1 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition cursor-pointer border-none"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition cursor-pointer border-none flex items-center justify-center gap-1.5"
                    >
                      {isLoading ? <RefreshCw size={14} className="animate-spin" /> : "Save Changes"}
                    </button>
                  </div>
                </form>
              ) : null}

              {/* Bookmarked Lessons Quick Access */}
              {(currentUser.stats?.bookmarkedTopics || []).length > 0 && (
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                      <Bookmark size={14} className="text-purple-600" />
                      <span>Bookmarked Lessons ({currentUser.stats.bookmarkedTopics.length})</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                    {currentUser.stats.bookmarkedTopics.map((topicId) => (
                      <button
                        key={topicId}
                        onClick={() => {
                          if (onSelectTopic) onSelectTopic(topicId);
                          closeAuthModal();
                        }}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer truncate max-w-[200px]"
                      >
                        {topicId.replace(/-/g, " ")}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Account Actions (Sign Out & Delete) */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={logout}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition cursor-pointer border-none"
                >
                  <LogOut size={15} />
                  <span>Sign Out</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete your account? All progress will be removed.")) {
                      deleteAccount();
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-bold transition cursor-pointer border-none"
                >
                  <Trash2 size={14} />
                  <span>Delete Account</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
