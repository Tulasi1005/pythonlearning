import React from "react";
import { X, Globe } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

export default function LanguageSelectorModal({
  isOpen,
  onClose,
  selectedLanguage,
  onSelectLanguage
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in">
      <div
        className="bg-white dark:bg-[#0b0f19] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 relative scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition cursor-pointer border border-slate-200 dark:border-slate-700 shadow-2xs z-10"
          title="Close"
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onSelectLanguage={(langId) => {
            onSelectLanguage(langId);
            onClose();
          }}
          showTitle={true}
        />
      </div>
    </div>
  );
}
