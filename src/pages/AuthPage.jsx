import React, { useState } from "react";
import {
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
  Code,
  Terminal,
  Sun,
  Moon,
  Zap,
  Globe,
  RefreshCw,
  Check
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { LEARNING_STAGES, getStageById } from "../data/learningStages";
import { LEARNING_LANGUAGES, getLanguageById } from "../data/learningLanguages";
import { AVATAR_OPTIONS } from "../services/authService";

export default function AuthPage({ initialMode = "login", onContinueAsGuest, onSelectTopic }) {
  const { login, signup, resetPassword } = useAuth();
  const { theme, toggleTheme, isDark } = useTheme();

  const [mode, setMode] = useState(initialMode); // 'login' | 'signup' | 'forgot'
  
  // Login fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRemember, setLoginRemember] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Signup fields
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [signupStage, setSignupStage] = useState("young");
  const [signupLanguage, setSignupLanguage] = useState("english");
  const [signupAvatar, setSignupAvatar] = useState("snake_blue");
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  // Forgot password fields
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotNewPassword, setForgotNewPassword] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);

  // Status feedback
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    } catch (err) {
      setErrorMsg(err.message || "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

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
    } catch (err) {
      setErrorMsg(err.message || "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      await resetPassword(forgotEmail, forgotNewPassword);
      setForgotSuccess(true);
      setSuccessMsg("Password reset successfully! You can now sign in.");
    } catch (err) {
      setErrorMsg(err.message || "Password reset failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      {/* Dynamic Background Glows */}
      <div style={{
        position: "absolute",
        top: "-10rem",
        left: "-10rem",
        width: "25rem",
        height: "25rem",
        background: "rgba(99, 102, 241, 0.15)",
        borderRadius: "9999px",
        filter: "blur(60px)",
        pointerEvents: "none"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "-10rem",
        right: "-10rem",
        width: "25rem",
        height: "25rem",
        background: "rgba(59, 130, 246, 0.15)",
        borderRadius: "9999px",
        filter: "blur(60px)",
        pointerEvents: "none"
      }}></div>

      {/* Top Header */}
      <header className="auth-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "0.875rem",
            background: "linear-gradient(135deg, #2563eb, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "800",
            fontSize: "1rem",
            fontFamily: "monospace",
            boxShadow: "0 4px 12px rgba(99, 102, 241, 0.25)"
          }}>
            <span style={{ color: "#fde047" }}>Py</span>
          </div>
          <div>
            <span style={{
              fontWeight: "800",
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
              display: "block",
              lineHeight: 1.2
            }}>
              Python Adaptive
            </span>
            <span style={{
              fontSize: "0.75rem",
              fontWeight: "600",
              color: "var(--color-indigo)",
              display: "block",
              lineHeight: 1.2
            }}>
              Interactive Guide & Engine
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              padding: "0.55rem",
              borderRadius: "0.75rem",
              background: "var(--color-surface)",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={17} style={{ color: "#fbbf24" }} /> : <Moon size={17} />}
          </button>

          {/* Guest Pass */}
          {onContinueAsGuest && (
            <button
              onClick={onContinueAsGuest}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.75rem",
                fontSize: "0.8rem",
                fontWeight: "700",
                background: "var(--color-surface)",
                color: "var(--color-text)",
                border: "1px solid var(--color-border)",
                cursor: "pointer",
                boxShadow: "var(--shadow-2xs)"
              }}
            >
              Continue as Guest →
            </button>
          )}
        </div>
      </header>

      {/* Main Responsive Grid Layout */}
      <main className="auth-main-layout">
        {/* Left Hero Branding Column */}
        <div className="auth-hero-section">
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 0.85rem",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: "800",
            background: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            color: "var(--color-indigo)",
            alignSelf: "flex-start"
          }}>
            <Sparkles size={14} />
            <span>Personalized Python Learning Platform</span>
          </div>

          <h1 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: "900",
            letterSpacing: "-0.03em",
            lineHeight: 1.15
          }}>
            Master Python at <br />
            <span style={{
              background: "linear-gradient(135deg, #2563eb, #6366f1, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Your Age & Language
            </span>
          </h1>

          <p style={{
            fontSize: "0.95rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.6,
            maxWidth: "32rem"
          }}>
            Sign in or create your account to save your learning journey, track XP points, keep your daily streak alive, and customize Python explanations for your stage.
          </p>

          {/* Feature Highlights Grid */}
          <div className="auth-feature-grid">
            <div style={{
              padding: "0.85rem 1rem",
              borderRadius: "1rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-2xs)",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem"
            }}>
              <div style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "0.65rem",
                background: "rgba(16, 185, 129, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                flexShrink: 0
              }}>
                🧸
              </div>
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: "700", marginBottom: "0.15rem" }}>5 Learning Stages</h4>
                <p style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)", lineHeight: 1.4 }}>Kid, Young, College, Graduate, & Professional.</p>
              </div>
            </div>

            <div style={{
              padding: "0.85rem 1rem",
              borderRadius: "1rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-2xs)",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem"
            }}>
              <div style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "0.65rem",
                background: "rgba(37, 99, 235, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                flexShrink: 0
              }}>
                🌐
              </div>
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: "700", marginBottom: "0.15rem" }}>4 Languages</h4>
                <p style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)", lineHeight: 1.4 }}>English, Telugu, Hindi & English+Telugu conversational mix.</p>
              </div>
            </div>

            <div style={{
              padding: "0.85rem 1rem",
              borderRadius: "1rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-2xs)",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem"
            }}>
              <div style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "0.65rem",
                background: "rgba(245, 158, 11, 0.12)",
                color: "#d97706",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <Zap size={16} />
              </div>
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: "700", marginBottom: "0.15rem" }}>Live Python Runner</h4>
                <p style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)", lineHeight: 1.4 }}>Execute real Python scripts in your browser with zero setup.</p>
              </div>
            </div>

            <div style={{
              padding: "0.85rem 1rem",
              borderRadius: "1rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-2xs)",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem"
            }}>
              <div style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "0.65rem",
                background: "rgba(139, 92, 246, 0.12)",
                color: "var(--color-violet)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <Flame size={16} />
              </div>
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: "700", marginBottom: "0.15rem" }}>XP & Streaks</h4>
                <p style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)", lineHeight: 1.4 }}>Track quiz scores, level ups, and saved lessons in your account.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Authentication Card Column */}
        <div className="auth-card-section">
          <div className="auth-card">
            {/* Header / Tabs */}
            <div style={{
              padding: "1.5rem 1.5rem 1rem 1.5rem",
              background: "linear-gradient(135deg, #2563eb, #4f46e5, #7c3aed)",
              color: "#fff"
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <h2 style={{ fontSize: "1.25rem", fontWeight: "800", letterSpacing: "-0.02em", color: "#fff" }}>
                    {mode === "login" && "Welcome Back!"}
                    {mode === "signup" && "Create New Account"}
                    {mode === "forgot" && "Reset Password"}
                  </h2>
                  <p style={{ fontSize: "0.75rem", color: "#e0e7ff", marginTop: "0.2rem" }}>
                    {mode === "login" && "Sign in to access your stored lessons, streak & XP."}
                    {mode === "signup" && "Sign up to customize your stage, language, and bookmarks."}
                    {mode === "forgot" && "Enter your email to update your account password."}
                  </p>
                </div>
              </div>

              {/* Mode Tabs */}
              {mode !== "forgot" && (
                <div style={{
                  display: "flex",
                  background: "rgba(0, 0, 0, 0.22)",
                  padding: "0.25rem",
                  borderRadius: "0.75rem",
                  marginTop: "1rem",
                  border: "1px solid rgba(255, 255, 255, 0.15)"
                }}>
                  <button
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setErrorMsg("");
                      setSuccessMsg("");
                    }}
                    style={{
                      flex: 1,
                      padding: "0.45rem 0",
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      borderRadius: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      background: mode === "login" ? "#ffffff" : "transparent",
                      color: mode === "login" ? "#1e1b4b" : "rgba(255, 255, 255, 0.85)",
                      boxShadow: mode === "login" ? "0 1px 3px rgba(0,0,0,0.2)" : "none"
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode("signup");
                      setErrorMsg("");
                      setSuccessMsg("");
                    }}
                    style={{
                      flex: 1,
                      padding: "0.45rem 0",
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      borderRadius: "0.5rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      background: mode === "signup" ? "#ffffff" : "transparent",
                      color: mode === "signup" ? "#1e1b4b" : "rgba(255, 255, 255, 0.85)",
                      boxShadow: mode === "signup" ? "0 1px 3px rgba(0,0,0,0.2)" : "none"
                    }}
                  >
                    Create Account
                  </button>
                </div>
              )}
            </div>

            {/* Form Scroll Container */}
            <div style={{
              padding: "1.25rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxHeight: "65vh",
              overflowY: "auto"
            }}>
              {/* Error Message */}
              {errorMsg && (
                <div style={{
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  background: "rgba(244, 63, 94, 0.1)",
                  border: "1px solid rgba(244, 63, 94, 0.3)",
                  color: "#e11d48",
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  <AlertCircle size={16} style={{ flexShrink: 0 }} />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Success Message */}
              {successMsg && (
                <div style={{
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  color: "#059669",
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
                  <span>{successMsg}</span>
                </div>
              )}

              {/* ============================================================ */}
              {/* SIGN IN FORM */}
              {/* ============================================================ */}
              {mode === "login" && (
                <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.35rem" }}>
                      Email or Username
                    </label>
                    <div style={{ position: "relative" }}>
                      <Mail
                        size={16}
                        style={{
                          position: "absolute",
                          left: "0.85rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "var(--color-text-subtle)"
                        }}
                      />
                      <input
                        type="text"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="alex@example.com or Alex Johnson"
                        className="auth-form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                      <label style={{ fontSize: "0.75rem", fontWeight: "700" }}>
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setMode("forgot");
                          setErrorMsg("");
                          setSuccessMsg("");
                        }}
                        style={{
                          fontSize: "0.725rem",
                          fontWeight: "700",
                          color: "var(--color-indigo)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 0
                        }}
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div style={{ position: "relative" }}>
                      <Lock
                        size={16}
                        style={{
                          position: "absolute",
                          left: "0.85rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "var(--color-text-subtle)"
                        }}
                      />
                      <input
                        type={showLoginPassword ? "text" : "password"}
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="auth-form-input"
                        style={{ paddingRight: "2.5rem" }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        style={{
                          position: "absolute",
                          right: "0.75rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "var(--color-text-subtle)",
                          padding: "0.2rem"
                        }}
                      >
                        {showLoginPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", userSelect: "none" }}>
                      <input
                        type="checkbox"
                        checked={loginRemember}
                        onChange={(e) => setLoginRemember(e.target.checked)}
                        style={{ width: "1rem", height: "1rem", cursor: "pointer" }}
                      />
                      <span>Remember my session</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-vibrant-primary"
                    style={{ width: "100%", padding: "0.75rem", fontSize: "0.875rem" }}
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

                  {/* 1-Click Demo Accounts */}
                  <div style={{ paddingTop: "0.75rem", borderTop: "1px solid var(--color-border)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.725rem", fontWeight: "700", color: "var(--color-text-subtle)", marginBottom: "0.5rem" }}>
                      <Sparkles size={13} style={{ color: "#f59e0b" }} />
                      <span>One-Click Test Accounts</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                      <button
                        type="button"
                        onClick={() => handleQuickDemo("alex@example.com", "password123")}
                        style={{
                          padding: "0.6rem",
                          borderRadius: "0.75rem",
                          background: "var(--color-surface-subtle)",
                          border: "1px solid var(--color-border)",
                          textAlign: "left",
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: "700", fontSize: "0.75rem", color: "var(--color-text)" }}>
                          <span>🐍</span>
                          <span>Alex (College)</span>
                        </div>
                        <div style={{ fontSize: "0.65rem", color: "var(--color-text-subtle)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          alex@example.com
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickDemo("priya@example.com", "password123")}
                        style={{
                          padding: "0.6rem",
                          borderRadius: "0.75rem",
                          background: "var(--color-surface-subtle)",
                          border: "1px solid var(--color-border)",
                          textAlign: "left",
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontWeight: "700", fontSize: "0.75rem", color: "var(--color-text)" }}>
                          <span>✨</span>
                          <span>Priya (Graduate)</span>
                        </div>
                        <div style={{ fontSize: "0.65rem", color: "var(--color-text-subtle)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          priya@example.com
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* ============================================================ */}
              {/* SIGN UP FORM */}
              {/* ============================================================ */}
              {mode === "signup" && (
                <form onSubmit={handleSignupSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {/* Full Name */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.35rem" }}>
                      Full Name
                    </label>
                    <div style={{ position: "relative" }}>
                      <User
                        size={16}
                        style={{
                          position: "absolute",
                          left: "0.85rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "var(--color-text-subtle)"
                        }}
                      />
                      <input
                        type="text"
                        required
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        placeholder="e.g. Sneha Patel"
                        className="auth-form-input"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.35rem" }}>
                      Email Address
                    </label>
                    <div style={{ position: "relative" }}>
                      <Mail
                        size={16}
                        style={{
                          position: "absolute",
                          left: "0.85rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "var(--color-text-subtle)"
                        }}
                      />
                      <input
                        type="email"
                        required
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="sneha@example.com"
                        className="auth-form-input"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.35rem" }}>
                      Password
                    </label>
                    <div style={{ position: "relative" }}>
                      <Lock
                        size={16}
                        style={{
                          position: "absolute",
                          left: "0.85rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "var(--color-text-subtle)"
                        }}
                      />
                      <input
                        type={showSignupPassword ? "text" : "password"}
                        required
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        placeholder="At least 6 characters"
                        className="auth-form-input"
                        style={{ paddingRight: "2.5rem" }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowSignupPassword(!showSignupPassword)}
                        style={{
                          position: "absolute",
                          right: "0.75rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "var(--color-text-subtle)",
                          padding: "0.2rem"
                        }}
                      >
                        {showSignupPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>

                    {/* Password Strength Indicator */}
                    {signupPassword && (
                      <div style={{ marginTop: "0.4rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.7rem", marginBottom: "0.2rem" }}>
                          <span style={{ color: "var(--color-text-subtle)", fontWeight: "600" }}>Strength</span>
                          <span style={{ fontWeight: "800" }}>{passwordStrength.label}</span>
                        </div>
                        <div style={{ width: "100%", background: "var(--color-surface-hover)", height: "4px", borderRadius: "9999px", overflow: "hidden" }}>
                          <div style={{
                            height: "100%",
                            width: `${passwordStrength.score}%`,
                            background: passwordStrength.score <= 25 ? "#f43f5e" : passwordStrength.score <= 50 ? "#f59e0b" : "#10b981",
                            transition: "all 0.3s ease"
                          }}></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.35rem" }}>
                      Confirm Password
                    </label>
                    <div style={{ position: "relative" }}>
                      <Lock
                        size={16}
                        style={{
                          position: "absolute",
                          left: "0.85rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "var(--color-text-subtle)"
                        }}
                      />
                      <input
                        type={showSignupPassword ? "text" : "password"}
                        required
                        value={signupConfirmPassword}
                        onChange={(e) => setSignupConfirmPassword(e.target.value)}
                        placeholder="Re-enter password"
                        className="auth-form-input"
                      />
                    </div>
                  </div>

                  {/* Pick Learning Stage & Language */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", paddingTop: "0.25rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.725rem", fontWeight: "700", marginBottom: "0.3rem" }}>
                        Target Stage
                      </label>
                      <select
                        value={signupStage}
                        onChange={(e) => setSignupStage(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.55rem 0.65rem",
                          borderRadius: "0.75rem",
                          border: "1px solid var(--color-border)",
                          background: "var(--color-surface-subtle)",
                          color: "var(--color-text)",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          cursor: "pointer"
                        }}
                      >
                        {LEARNING_STAGES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.icon} {s.label} ({s.ageRange})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.725rem", fontWeight: "700", marginBottom: "0.3rem" }}>
                        Language
                      </label>
                      <select
                        value={signupLanguage}
                        onChange={(e) => setSignupLanguage(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.55rem 0.65rem",
                          borderRadius: "0.75rem",
                          border: "1px solid var(--color-border)",
                          background: "var(--color-surface-subtle)",
                          color: "var(--color-text)",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          cursor: "pointer"
                        }}
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
                    <label style={{ display: "block", fontSize: "0.725rem", fontWeight: "700", marginBottom: "0.35rem" }}>
                      Choose Avatar
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {AVATAR_OPTIONS.map((a) => (
                        <button
                          key={a.id}
                          type="button"
                          onClick={() => setSignupAvatar(a.id)}
                          style={{
                            width: "2.25rem",
                            height: "2.25rem",
                            borderRadius: "0.65rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.1rem",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            border: signupAvatar === a.id ? "2px solid var(--color-indigo)" : "1px solid var(--color-border)",
                            background: signupAvatar === a.id ? "rgba(99, 102, 241, 0.2)" : "var(--color-surface-subtle)",
                            transform: signupAvatar === a.id ? "scale(1.1)" : "scale(1)"
                          }}
                          title={a.label}
                        >
                          {a.emoji}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-vibrant-primary"
                    style={{ width: "100%", padding: "0.75rem", fontSize: "0.875rem", marginTop: "0.25rem" }}
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
              {/* FORGOT PASSWORD FORM */}
              {/* ============================================================ */}
              {mode === "forgot" && (
                <form onSubmit={handleForgotSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.35rem" }}>
                      Registered Email
                    </label>
                    <div style={{ position: "relative" }}>
                      <Mail
                        size={16}
                        style={{
                          position: "absolute",
                          left: "0.85rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "var(--color-text-subtle)"
                        }}
                      />
                      <input
                        type="email"
                        required
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="auth-form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.35rem" }}>
                      New Password
                    </label>
                    <div style={{ position: "relative" }}>
                      <Lock
                        size={16}
                        style={{
                          position: "absolute",
                          left: "0.85rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "var(--color-text-subtle)"
                        }}
                      />
                      <input
                        type="password"
                        required
                        value={forgotNewPassword}
                        onChange={(e) => setForgotNewPassword(e.target.value)}
                        placeholder="At least 6 characters"
                        className="auth-form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      type="button"
                      onClick={() => {
                        setMode("login");
                        setErrorMsg("");
                        setSuccessMsg("");
                      }}
                      className="btn-vibrant-secondary"
                      style={{ flex: 1, padding: "0.65rem", fontSize: "0.75rem" }}
                    >
                      Back to Sign In
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-vibrant-primary"
                      style={{ flex: 1, padding: "0.65rem", fontSize: "0.75rem" }}
                    >
                      {isLoading ? <RefreshCw size={14} className="animate-spin" /> : "Save Password"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Bottom Card Switcher */}
            <div style={{
              padding: "0.85rem 1.5rem",
              background: "var(--color-surface-subtle)",
              borderTop: "1px solid var(--color-border)",
              textAlign: "center",
              fontSize: "0.75rem",
              color: "var(--color-text-muted)"
            }}>
              {mode === "login" ? (
                <span>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setMode("signup");
                      setErrorMsg("");
                      setSuccessMsg("");
                    }}
                    style={{
                      fontWeight: "700",
                      color: "var(--color-indigo)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0
                    }}
                  >
                    Sign Up Free
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setErrorMsg("");
                      setSuccessMsg("");
                    }}
                    style={{
                      fontWeight: "700",
                      color: "var(--color-indigo)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0
                    }}
                  >
                    Sign In
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        position: "relative",
        zIndex: 10,
        padding: "1rem",
        textAlign: "center",
        fontSize: "0.75rem",
        color: "var(--color-text-subtle)",
        borderTop: "1px solid var(--color-border-subtle)"
      }}>
        Python Adaptive Interactive Guide • All Learning Stages & Languages Supported
      </footer>
    </div>
  );
}
