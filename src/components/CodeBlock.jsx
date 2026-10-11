import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

// Safe Python syntax highlighter
function highlightPython(code) {
  if (!code) return "";
  
  // Escape HTML
  const escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Regex patterns
  const tokenRegex = /(#[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b(?:def|class|if|elif|else|for|while|try|except|finally|with|as|import|from|return|yield|break|continue|pass|lambda|raise|in|is|not|and|or|global|nonlocal|async|await)\b)|(\b(?:True|False|None)\b)|(\b(?:print|len|range|int|str|float|list|dict|set|tuple|bool|type|open|input|sum|min|max|enumerate|zip|map|filter|sorted|isinstance|super|abs|round)\b)|(\b\d+(?:\.\d+)?\b)/g;

  return escaped.replace(tokenRegex, (match, comment, str, kw, boolConst, builtin, num) => {
    if (comment) return `<span class="code-token-comment">${comment}</span>`;
    if (str) return `<span class="code-token-string">${str}</span>`;
    if (kw) return `<span class="code-token-keyword">${kw}</span>`;
    if (boolConst) return `<span class="code-token-boolean">${boolConst}</span>`;
    if (builtin) return `<span class="code-token-builtin">${builtin}</span>`;
    if (num) return `<span class="code-token-number">${num}</span>`;
    return match;
  });
}

export default function CodeBlock({ code, language = "python", title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightedHtml = highlightPython(code);

  return (
    <div className="code-block-container my-4 rounded-xl overflow-hidden shadow-md">
      <div className="code-block-header flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/90 inline-block"></span>
          </div>
          <span className="ml-2 font-semibold text-slate-200 text-xs font-mono">
            {title || language.toUpperCase()}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="copy-btn flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition text-xs cursor-pointer border border-slate-600"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="code-block-body p-4 overflow-x-auto font-mono text-sm leading-relaxed">
        <pre className="m-0 font-mono">
          <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
        </pre>
      </div>
    </div>
  );
}

