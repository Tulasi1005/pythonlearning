import React, { useState, useEffect, useRef } from 'react';
import {
  StickyNote,
  Save,
  Check,
  Copy,
  Trash2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Bold,
  List,
  Code2,
  CheckSquare,
  Maximize2,
  Minimize2,
  Download
} from 'lucide-react';

export default function TopicNotes({ topicId, topicTitle, defaultKeyPoints = [] }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [saveStatus, setSaveStatus] = useState('saved'); // 'saved' | 'saving' | 'dirty'
  const [copied, setCopied] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState(null);
  const saveTimeoutRef = useRef(null);
  const textareaRef = useRef(null);

  const storageKey = `py_notes_${topicId}`;

  // Load existing notes for this topic from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved !== null) {
        setNoteContent(saved);
        setSaveStatus('saved');
      } else {
        setNoteContent('');
        setSaveStatus('saved');
      }
    } catch {
      setNoteContent('');
    }
  }, [topicId, storageKey]);

  // Auto-save note with debounce
  const handleContentChange = (e) => {
    const val = e.target.value;
    setNoteContent(val);
    setSaveStatus('saving');

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      try {
        localStorage.setItem(storageKey, val);
        setSaveStatus('saved');
        setLastSavedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      } catch {
        setSaveStatus('saved');
      }
    }, 600);
  };

  const handleManualSave = () => {
    try {
      localStorage.setItem(storageKey, noteContent);
      setSaveStatus('saved');
      setLastSavedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } catch {
      // ignore
    }
  };

  const handleInsertTemplate = () => {
    const template = `📌 **${topicTitle} — Key Notes**:\n• Core Concept: \n• Important Syntax: \n• Real-World Use Case: \n• Watch Out For: \n`;
    const newContent = noteContent ? `${noteContent}\n\n${template}` : template;
    setNoteContent(newContent);
    localStorage.setItem(storageKey, newContent);
    setSaveStatus('saved');
    setLastSavedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };

  const handleInsertKeyPoint = (point) => {
    const addition = `• ${point}\n`;
    const newContent = noteContent ? `${noteContent}\n${addition}` : addition;
    setNoteContent(newContent);
    localStorage.setItem(storageKey, newContent);
    setSaveStatus('saved');
  };

  const handleInsertSnippet = (type) => {
    let snippet = '';
    if (type === 'bullet') snippet = '• ';
    if (type === 'todo') snippet = '- [ ] ';
    if (type === 'code') snippet = '```python\n# Code snippet\n\n```\n';
    if (type === 'bold') snippet = '**Important**: ';

    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart || 0;
      const end = textareaRef.current.selectionEnd || 0;
      const before = noteContent.substring(0, start);
      const after = noteContent.substring(end);
      const updated = before + snippet + after;
      setNoteContent(updated);
      localStorage.setItem(storageKey, updated);
      setSaveStatus('saved');
      setTimeout(() => {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(start + snippet.length, start + snippet.length);
      }, 50);
    } else {
      const updated = noteContent + '\n' + snippet;
      setNoteContent(updated);
      localStorage.setItem(storageKey, updated);
      setSaveStatus('saved');
    }
  };

  const handleCopyNotes = async () => {
    if (!noteContent) return;
    try {
      await navigator.clipboard.writeText(noteContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleDownloadNotes = () => {
    if (!noteContent) return;
    const blob = new Blob([noteContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topicId}-notes.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClearNotes = () => {
    if (!noteContent) return;
    if (window.confirm('Are you sure you want to clear your notes for this topic?')) {
      setNoteContent('');
      localStorage.removeItem(storageKey);
      setSaveStatus('saved');
    }
  };

  return (
    <div
      className={`bg-amber-50/70 dark:bg-[#131b2e] rounded-2xl border border-amber-200/80 dark:border-amber-900/40 shadow-sm transition-all duration-200 overflow-hidden ${
        isExpanded ? 'fixed inset-4 z-[9990] max-w-4xl mx-auto shadow-2xl flex flex-col bg-white dark:bg-[#0f172a]' : ''
      }`}
    >
      {/* Note Header */}
      <div className="bg-amber-100/80 dark:bg-amber-950/40 px-4 py-3 flex items-center justify-between border-b border-amber-200/70 dark:border-amber-900/30">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-200/90 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 flex items-center justify-center shadow-2xs">
            <StickyNote size={17} />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-100 flex items-center gap-2 m-0">
              <span>My Important Notes</span>
              {noteContent && (
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" title="Notes Active" />
              )}
            </h3>
            <span className="text-[10px] sm:text-xs text-amber-800/80 dark:text-amber-300/70 block">
              Auto-saved for "{topicTitle}"
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {saveStatus === 'saving' && (
            <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 animate-pulse px-2 py-0.5 bg-amber-200/50 dark:bg-amber-900/40 rounded-md">
              Saving...
            </span>
          )}
          {saveStatus === 'saved' && lastSavedTime && (
            <span className="hidden sm:inline-block text-[10px] text-slate-500 dark:text-slate-400 mr-1">
              Saved {lastSavedTime}
            </span>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 text-amber-800 dark:text-amber-300 hover:bg-amber-200/60 dark:hover:bg-amber-900/60 rounded-lg transition border-none cursor-pointer bg-transparent"
            title={isExpanded ? "Collapse Note" : "Expand Note to Full Screen"}
          >
            {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-amber-800 dark:text-amber-300 hover:bg-amber-200/60 dark:hover:bg-amber-900/60 rounded-lg transition border-none cursor-pointer bg-transparent"
            title={isOpen ? "Minimize Notes" : "Open Notes"}
          >
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {/* Note Body (Collapsible) */}
      {isOpen && (
        <div className={`p-3.5 space-y-3 ${isExpanded ? 'flex-1 flex flex-col' : ''}`}>
          {/* Quick Toolbar */}
          <div className="flex items-center justify-between gap-1 flex-wrap pb-2 border-b border-amber-200/60 dark:border-amber-900/30 text-xs">
            <div className="flex items-center gap-1 flex-wrap">
              <button
                onClick={() => handleInsertSnippet('bullet')}
                className="px-2 py-1 bg-white/80 dark:bg-slate-800/80 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-slate-700 dark:text-slate-300 font-semibold rounded-md border border-amber-200/60 dark:border-slate-700 transition flex items-center gap-1 cursor-pointer text-[11px]"
                title="Insert Bullet Point"
              >
                <List size={12} />
                <span>Bullet</span>
              </button>

              <button
                onClick={() => handleInsertSnippet('bold')}
                className="px-2 py-1 bg-white/80 dark:bg-slate-800/80 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-slate-700 dark:text-slate-300 font-semibold rounded-md border border-amber-200/60 dark:border-slate-700 transition flex items-center gap-1 cursor-pointer text-[11px]"
                title="Insert Important Bold Tag"
              >
                <Bold size={12} />
                <span>Bold</span>
              </button>

              <button
                onClick={() => handleInsertSnippet('code')}
                className="px-2 py-1 bg-white/80 dark:bg-slate-800/80 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-slate-700 dark:text-slate-300 font-semibold rounded-md border border-amber-200/60 dark:border-slate-700 transition flex items-center gap-1 cursor-pointer text-[11px]"
                title="Insert Code Block"
              >
                <Code2 size={12} />
                <span>Code</span>
              </button>

              <button
                onClick={() => handleInsertSnippet('todo')}
                className="px-2 py-1 bg-white/80 dark:bg-slate-800/80 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-slate-700 dark:text-slate-300 font-semibold rounded-md border border-amber-200/60 dark:border-slate-700 transition flex items-center gap-1 cursor-pointer text-[11px]"
                title="Insert Checklist Item"
              >
                <CheckSquare size={12} />
                <span>Checklist</span>
              </button>

              <button
                onClick={handleInsertTemplate}
                className="px-2 py-1 bg-amber-200/70 dark:bg-amber-900/60 hover:bg-amber-300/80 dark:hover:bg-amber-800/80 text-amber-900 dark:text-amber-200 font-bold rounded-md border border-amber-300/70 dark:border-amber-700/60 transition flex items-center gap-1 cursor-pointer text-[11px]"
                title="Insert Structured Note Template"
              >
                <Sparkles size={12} />
                <span>Template</span>
              </button>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleCopyNotes}
                disabled={!noteContent}
                className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer bg-transparent border-none"
                title="Copy Notes to Clipboard"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>

              <button
                onClick={handleDownloadNotes}
                disabled={!noteContent}
                className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer bg-transparent border-none"
                title="Download as Markdown"
              >
                <Download size={14} />
              </button>

              <button
                onClick={handleClearNotes}
                disabled={!noteContent}
                className="p-1.5 text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 rounded-md transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer bg-transparent border-none"
                title="Clear Notes"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>

          {/* Text Area for User Notes */}
          <div className={`relative ${isExpanded ? 'flex-1 flex flex-col' : ''}`}>
            <textarea
              ref={textareaRef}
              value={noteContent}
              onChange={handleContentChange}
              placeholder={`Write your important points, reminders, and key concepts for "${topicTitle}" here...\n\nExample:\n• Remember: print() outputs values to the terminal\n• Watch out: Variable names cannot start with a number`}
              className={`w-full p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-amber-200/80 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-sans leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition resize-y font-mono ${
                isExpanded ? 'flex-1 h-full' : 'min-h-[120px] max-h-[360px]'
              }`}
            />
          </div>

          {/* Quick Note Suggestions / Key Points to remember */}
          {defaultKeyPoints && defaultKeyPoints.length > 0 && (
            <div className="pt-2 border-t border-amber-200/50 dark:border-amber-900/30">
              <span className="text-[10px] font-bold text-amber-900 dark:text-amber-300 block mb-1">
                💡 Quick Point to Add:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {defaultKeyPoints.slice(0, 3).map((pt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleInsertKeyPoint(pt)}
                    className="text-[10px] px-2 py-0.5 bg-amber-100/90 dark:bg-amber-950/80 hover:bg-amber-200 dark:hover:bg-amber-900 text-amber-900 dark:text-amber-200 rounded-md border border-amber-300/60 dark:border-amber-800/60 transition cursor-pointer text-left"
                    title="Click to add to your notes"
                  >
                    + {pt.length > 45 ? pt.slice(0, 45) + '...' : pt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer Info */}
          <div className="flex items-center justify-between text-[10px] text-amber-800/70 dark:text-slate-500 pt-1">
            <span>💾 Notes persist automatically in your browser.</span>
            <span>{noteContent.length} chars</span>
          </div>
        </div>
      )}
    </div>
  );
}
