/**
 * Master Dictionary Index
 * Unifies Python terminology, Computer Science concepts, and General academic/technical vocabulary.
 */

import { PYTHON_TERMS } from './pythonTerms.js';
import { COMPUTER_TERMS } from './computerTerms.js';
import { GENERAL_WORDS } from './generalWords.js';
import { DICTIONARY_TERMS as LEGACY_TERMS } from '../dictionaryData.js';

// Merge and deduplicate all dictionaries
const rawAll = [...PYTHON_TERMS, ...COMPUTER_TERMS, ...GENERAL_WORDS, ...LEGACY_TERMS];
const seenTerms = new Set();
export const ALL_DICTIONARY_TERMS = [];

for (const item of rawAll) {
  const normalized = item.term.toLowerCase().trim();
  if (!seenTerms.has(normalized)) {
    seenTerms.add(normalized);
    ALL_DICTIONARY_TERMS.push({
      ...item,
      term: normalized,
      synonyms: item.synonyms || []
    });
  }
}

/**
 * List of difficult / important words that are eligible for click-to-define
 */
export const DIFFICULT_WORDS_SET = new Set(
  ALL_DICTIONARY_TERMS.map(item => item.term.toLowerCase())
);

// Add common aliases & variations
[
  "variables", "functions", "loops", "syntax", "algorithms", "automation", "automate",
  "database", "databases", "programming", "reliable", "reliability", "reusable",
  "efficient", "application", "applications", "parameter", "parameters", "argument",
  "arguments", "condition", "conditions", "debugging", "class", "classes", "object",
  "objects", "module", "modules", "exception", "exceptions", "api", "apis"
].forEach(w => DIFFICULT_WORDS_SET.add(w.toLowerCase()));
