import React, { useState, useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react';
import { useDictionary } from '../context/DictionaryContext';

export default function GlobalWordLookupTooltip() {
  const { lookupWord } = useDictionary();
  const [position, setPosition] = useState(null);
  const [selectedWord, setSelectedWord] = useState('');
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => {
      setTimeout(() => {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) {
          return;
        }

        const rawText = selection.toString().trim();
        const cleanText = rawText.replace(/^[^\w]+|[^\w]+$/g, '');

        if (cleanText && cleanText.length >= 2 && cleanText.split(/\s+/).length <= 4) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          if (rect && rect.width > 0) {
            setSelectedWord(cleanText);
            setPosition({
              top: Math.max(10, rect.top + window.scrollY - 44),
              left: Math.max(10, rect.left + window.scrollX + rect.width / 2)
            });
            return;
          }
        }
      }, 50);
    };

    const handleMouseDown = (e) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setPosition(null);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  if (!position || !selectedWord) return null;

  return (
    <div
      ref={tooltipRef}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translateX(-50%)',
      }}
      className="fixed z-[9999] pointer-events-auto animate-in"
    >
      <button
        onClick={() => {
          lookupWord(selectedWord);
          setPosition(null);
          if (window.getSelection) {
            window.getSelection().removeAllRanges();
          }
        }}
        className="flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white rounded-xl shadow-xl border border-indigo-400/30 transition text-xs sm:text-sm font-bold cursor-pointer hover:scale-105"
      >
        <BookOpen size={14} className="text-amber-300" />
        <span>Define </span>
        <span className="max-w-[140px] truncate underline">"{selectedWord}"</span>
      </button>
    </div>
  );
}
