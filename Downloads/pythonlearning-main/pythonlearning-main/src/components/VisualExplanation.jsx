import React from "react";
import {
  Sparkles,
  Bot,
  Monitor,
  Gamepad2,
  Cpu,
  Zap,
  Tag,
  Box,
  User,
  Heart,
  Coins,
  FileCode,
  Workflow,
  Globe,
  Server,
  Database,
  ShieldCheck,
  Layers,
  ArrowRight,
  CheckCircle,
  Play,
  Activity,
  ShoppingBag,
  Clock,
  Sun,
  Truck,
  Trophy,
  Shield,
  GitFork,
  AlertCircle
} from "lucide-react";

// Icon mapping dictionary
const ICON_MAP = {
  Sparkles,
  Bot,
  Monitor,
  Gamepad2,
  Cpu,
  Zap,
  Tag,
  Box,
  User,
  Heart,
  Coins,
  FileCode,
  Workflow,
  Globe,
  Server,
  Database,
  ShieldCheck,
  Layers,
  ArrowRight,
  CheckCircle,
  Play,
  Activity,
  ShoppingBag,
  Clock,
  Sun,
  Truck,
  Trophy,
  Shield,
  GitFork,
  AlertCircle
};

export default function VisualExplanation({ visual, stageId = "young", topicTitle }) {
  if (!visual) return null;

  // Stage thematic borders and header colors
  const stageThemes = {
    kid: {
      cardBg: "bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-teal-500/10 dark:from-emerald-950/40 dark:via-slate-900 dark:to-teal-950/30",
      border: "border-emerald-300 dark:border-emerald-800",
      badgeColor: "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      nodeBg: "bg-white dark:bg-slate-900 border-emerald-200 dark:border-emerald-800/80 shadow-xs"
    },
    young: {
      cardBg: "bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 dark:from-blue-950/40 dark:via-slate-900 dark:to-indigo-950/30",
      border: "border-blue-300 dark:border-blue-800",
      badgeColor: "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800",
      iconColor: "text-blue-600 dark:text-blue-400",
      nodeBg: "bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800/80 shadow-xs"
    },
    college: {
      cardBg: "bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-purple-500/10 dark:from-indigo-950/40 dark:via-slate-900 dark:to-purple-950/30",
      border: "border-indigo-300 dark:border-indigo-800",
      badgeColor: "bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      nodeBg: "bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-800/80 shadow-xs"
    },
    graduate: {
      cardBg: "bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-yellow-500/10 dark:from-amber-950/40 dark:via-slate-900 dark:to-orange-950/30",
      border: "border-amber-300 dark:border-amber-800",
      badgeColor: "bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-800",
      iconColor: "text-amber-600 dark:text-amber-400",
      nodeBg: "bg-white dark:bg-slate-900 border-amber-200 dark:border-amber-800/80 shadow-xs"
    },
    professional: {
      cardBg: "bg-gradient-to-br from-purple-500/10 via-fuchsia-500/5 to-pink-500/10 dark:from-purple-950/40 dark:via-slate-900 dark:to-fuchsia-950/30",
      border: "border-purple-300 dark:border-purple-800",
      badgeColor: "bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-800",
      iconColor: "text-purple-600 dark:text-purple-400",
      nodeBg: "bg-white dark:bg-slate-900 border-purple-200 dark:border-purple-800/80 shadow-xs"
    }
  };

  const currentTheme = stageThemes[stageId] || stageThemes.young;

  return (
    <section className={`visual-explanation-card p-5 sm:p-7 rounded-2xl border ${currentTheme.border} ${currentTheme.cardBg} my-4 shadow-sm backdrop-blur-md`}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl select-none">🖼️</span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Visual Explanation: {visual.metaphor || topicTitle}
          </h3>
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${currentTheme.badgeColor} shadow-2xs`}>
          {visual.badge || "Visual Diagram"}
        </span>
      </div>

      {/* Description */}
      {visual.description && (
        <p className="body-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          {visual.description}
        </p>
      )}

      {/* Diagram / Visual Blocks Grid */}
      {visual.elements && visual.elements.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-2">
          {visual.elements.map((elem, idx) => {
            const IconComponent = ICON_MAP[elem.icon] || Sparkles;

            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl border flex flex-col justify-between ${currentTheme.nodeBg} transition hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {elem.label}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-100 dark:bg-slate-800 ${currentTheme.iconColor}`}>
                    <IconComponent size={18} />
                  </div>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono break-words">
                  {elem.value}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
