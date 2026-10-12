import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  getCurrentSession,
  loginUser,
  signUpUser,
  logoutUser,
  updateUserProfile,
  toggleUserBookmark,
  toggleUserCompletedTopic,
  recordQuizScore,
  deleteUserAccount,
  resetUserPassword
} from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children, onSyncStage, onSyncLanguage }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoadingSession, setIsLoadingSession] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("login"); // 'login' | 'signup' | 'profile' | 'forgot'
  const [authNotice, setAuthNotice] = useState(null);

  // Restore authenticated session from PostgreSQL on application startup
  useEffect(() => {
    let isMounted = true;
    // Safety valve: Unblock UI after max 3 seconds if network hangs
    const safetyTimeout = setTimeout(() => {
      if (isMounted) setIsLoadingSession(false);
    }, 3000);

    async function restoreSession() {
      try {
        const user = await getCurrentSession();
        if (isMounted && user) {
          setCurrentUser(user);
          if (onSyncStage && user.stage) onSyncStage(user.stage);
          if (onSyncLanguage && user.language) onSyncLanguage(user.language);
        }
      } catch (e) {
        // No active session
      } finally {
        if (isMounted) {
          clearTimeout(safetyTimeout);
          setIsLoadingSession(false);
        }
      }
    }
    restoreSession();
    return () => {
      isMounted = false;
      clearTimeout(safetyTimeout);
    };
  }, [onSyncStage, onSyncLanguage]);

  const openAuthModal = useCallback((mode = "login", notice = null) => {
    setAuthModalMode(mode);
    setAuthNotice(notice);
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
    setAuthNotice(null);
  }, []);

  const login = useCallback(
    async ({ emailOrUsername, password, rememberMe }) => {
      const user = await loginUser({ emailOrUsername, password, rememberMe });
      setCurrentUser(user);
      if (onSyncStage && user.stage) onSyncStage(user.stage);
      if (onSyncLanguage && user.language) onSyncLanguage(user.language);
      closeAuthModal();
      return user;
    },
    [closeAuthModal, onSyncStage, onSyncLanguage]
  );

  const signup = useCallback(
    async (formData) => {
      const user = await signUpUser(formData);
      setCurrentUser(user);
      if (onSyncStage && user.stage) onSyncStage(user.stage);
      if (onSyncLanguage && user.language) onSyncLanguage(user.language);
      closeAuthModal();
      return user;
    },
    [closeAuthModal, onSyncStage, onSyncLanguage]
  );

  const logout = useCallback(async () => {
    await logoutUser();
    setCurrentUser(null);
    closeAuthModal();
  }, [closeAuthModal]);

  const updateProfile = useCallback(
    async (updates) => {
      if (!currentUser) return null;
      const updated = await updateUserProfile(currentUser.id, updates);
      setCurrentUser(updated);
      if (updates.stage && onSyncStage) onSyncStage(updates.stage);
      if (updates.language && onSyncLanguage) onSyncLanguage(updates.language);
      return updated;
    },
    [currentUser, onSyncStage, onSyncLanguage]
  );

  const toggleBookmark = useCallback(
    async (topicId) => {
      if (!currentUser) {
        openAuthModal("login", "Sign in to save bookmarks to your profile!");
        return false;
      }
      const updatedUser = await toggleUserBookmark(currentUser.id, topicId);
      if (updatedUser) setCurrentUser(updatedUser);
      return (updatedUser?.stats?.bookmarkedTopics || []).includes(topicId);
    },
    [currentUser, openAuthModal]
  );

  const toggleComplete = useCallback(
    async (topicId, completed = true) => {
      if (!currentUser) {
        openAuthModal("login", "Sign in to record your learning progress and earn XP!");
        return false;
      }
      const updatedUser = await toggleUserCompletedTopic(currentUser.id, topicId, completed);
      if (updatedUser) setCurrentUser(updatedUser);
      return (updatedUser?.stats?.completedTopics || []).includes(topicId);
    },
    [currentUser, openAuthModal]
  );

  const recordQuiz = useCallback(
    async (topicId, scorePercent) => {
      if (!currentUser) return null;
      const updatedUser = await recordQuizScore(currentUser.id, topicId, scorePercent);
      if (updatedUser) setCurrentUser(updatedUser);
      return updatedUser;
    },
    [currentUser]
  );

  const resetPassword = useCallback(async (email, newPassword) => {
    return await resetUserPassword(email, newPassword);
  }, []);

  const deleteAccount = useCallback(async () => {
    if (!currentUser) return;
    await deleteUserAccount(currentUser.id);
    setCurrentUser(null);
    closeAuthModal();
  }, [currentUser, closeAuthModal]);

  const isTopicBookmarked = useCallback(
    (topicId) => {
      if (!currentUser || !currentUser.stats) return false;
      return (currentUser.stats.bookmarkedTopics || []).includes(topicId);
    },
    [currentUser]
  );

  const isTopicCompleted = useCallback(
    (topicId) => {
      if (!currentUser || !currentUser.stats) return false;
      return (currentUser.stats.completedTopics || []).includes(topicId);
    },
    [currentUser]
  );

  const value = {
    currentUser,
    isAuthenticated: Boolean(currentUser),
    isLoadingSession,
    isAuthModalOpen,
    authModalMode,
    authNotice,
    openAuthModal,
    closeAuthModal,
    setAuthModalMode,
    login,
    signup,
    logout,
    updateProfile,
    toggleBookmark,
    toggleComplete,
    recordQuiz,
    resetPassword,
    deleteAccount,
    isTopicBookmarked,
    isTopicCompleted
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
