import React from "react";
import { Terminal, Heart } from "lucide-react";

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-white/80 dark:bg-[#0b0f19]/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 mt-20 transition-colors">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold font-mono text-sm shadow-sm">
              <span className="text-amber-300 font-extrabold">Py</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                Python Adaptive Guide
              </span>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 m-0">
                Interactive, distraction-free Python education for all ages.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <button
              onClick={() => { onNavigate("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 bg-transparent border-none cursor-pointer p-0 transition"
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate("learn"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 bg-transparent border-none cursor-pointer p-0 transition"
            >
              Curriculum (198 Topics)
            </button>
            <button
              onClick={() => { onNavigate("practice"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 bg-transparent border-none cursor-pointer p-0 transition"
            >
              Practice
            </button>
            <button
              onClick={() => { onNavigate("projects"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 bg-transparent border-none cursor-pointer p-0 transition"
            >
              Projects
            </button>
            <button
              onClick={() => { onNavigate("about"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 bg-transparent border-none cursor-pointer p-0 transition"
            >
              About
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <p className="m-0">
            © {new Date().getFullYear()} Python Adaptive Guide. Free & Open Education.
          </p>
          <div className="flex items-center gap-1.5 font-semibold text-indigo-600 dark:text-indigo-400">
            <span>Learn by doing • Multi-Language & Age-Adaptive</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
