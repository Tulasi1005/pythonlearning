import { SECTIONS, allTopics } from '../../src/data/allTopics.js';
import { practiceData } from '../../src/data/practiceData.js';
import { projectsData } from '../../src/data/projectsData.js';
import { LEARNING_STAGES } from '../../src/data/learningStages.js';
import { LEARNING_LANGUAGES } from '../../src/data/learningLanguages.js';

console.log('===========================================================');
console.log('      REALITY CHECK & DEEP AUDIT OF QUIZ DATA');
console.log('===========================================================');

const stages = ['kid', 'young', 'college', 'graduate', 'professional'];
const languages = ['english', 'english-telugu', 'telugu', 'hindi'];

// 1. Curriculum Inventory
console.log('\n--- 1. REAL CURRICULUM INVENTORY ---');
console.log(`Total Sections: ${SECTIONS.length}`);

let totalTopics = 0;
const topicIdMap = new Map();
const duplicates = [];
const missingFields = [];

SECTIONS.forEach((section, sIdx) => {
  const count = section.topics ? section.topics.length : 0;
  console.log(`Section ${section.number}: ${section.title} (${section.id}) -> ${count} topics`);
  totalTopics += count;

  (section.topics || []).forEach(t => {
    if (!t.id || typeof t.id !== 'string') {
      missingFields.push({ topic: t, error: 'Missing or non-string id' });
    } else if (topicIdMap.has(t.id)) {
      duplicates.push({ id: t.id, section: section.id, firstSeen: topicIdMap.get(t.id) });
    } else {
      topicIdMap.set(t.id, section.id);
    }
  });
});

console.log(`\nTotal Topics across all sections: ${totalTopics}`);
console.log(`Unique Topic IDs: ${topicIdMap.size}`);
console.log(`Duplicate IDs: ${duplicates.length === 0 ? 'None (0)' : JSON.stringify(duplicates)}`);
console.log(`Invalid Topic Objects: ${missingFields.length}`);

// 2. Quiz Pipeline & Stored Data Verification
console.log('\n--- 2. QUIZ STORAGE & PIPELINE VERIFICATION ---');

let totalTopicQuizzes = 0;
let totalTopicQuestions = 0;
let questionIssues = [];
let optionsCountDistribution = {};
let codeQuestionsCount = 0;

allTopics.forEach(topic => {
  if (!topic.stages) {
    questionIssues.push({ topicId: topic.id, error: 'Missing topic.stages' });
    return;
  }

  stages.forEach(st => {
    const stageObj = topic.stages[st];
    if (!stageObj) {
      questionIssues.push({ topicId: topic.id, stage: st, error: 'Missing stage object' });
      return;
    }

    languages.forEach(lang => {
      totalTopicQuizzes++;
      const langPkg = stageObj.languages?.[lang] || stageObj.languages?.[lang.replace('-', '_')] || stageObj;
      const questions = langPkg?.questions;

      if (!questions || !Array.isArray(questions)) {
        questionIssues.push({ topicId: topic.id, stage: st, lang, error: 'Missing questions array' });
        return;
      }

      if (questions.length === 0) {
        questionIssues.push({ topicId: topic.id, stage: st, lang, error: 'Empty questions array' });
        return;
      }

      questions.forEach((q, qIdx) => {
        totalTopicQuestions++;
        const numOpts = q.options ? q.options.length : 0;
        optionsCountDistribution[numOpts] = (optionsCountDistribution[numOpts] || 0) + 1;

        if (!q.question || typeof q.question !== 'string' || q.question.trim().length === 0) {
          questionIssues.push({ topicId: topic.id, stage: st, lang, qIdx, error: 'Empty question text' });
        }

        if (!q.options || !Array.isArray(q.options) || q.options.length < 2) {
          questionIssues.push({ topicId: topic.id, stage: st, lang, qIdx, error: 'Fewer than 2 options' });
        } else {
          // Check for duplicate options
          const optSet = new Set(q.options);
          if (optSet.size !== q.options.length) {
            questionIssues.push({ topicId: topic.id, stage: st, lang, qIdx, error: 'Duplicate options found in question' });
          }

          // Check correct answer
          if (!q.correctAnswer || !q.options.includes(q.correctAnswer)) {
            questionIssues.push({
              topicId: topic.id,
              stage: st,
              lang,
              qIdx,
              error: `correctAnswer "${q.correctAnswer}" not in options [${q.options.join(', ')}]`
            });
          }
        }

        if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length === 0) {
          questionIssues.push({ topicId: topic.id, stage: st, lang, qIdx, error: 'Missing or empty explanation' });
        }

        if (q.question.includes('(') || q.question.includes('=') || q.question.includes('print') || q.question.includes('def')) {
          codeQuestionsCount++;
        }
      });
    });
  });
});

console.log(`Total Topic Quiz Combinations (198 x 5 stages x 4 languages): ${totalTopicQuizzes}`);
console.log(`Total Stored Questions: ${totalTopicQuestions}`);
console.log(`Options Count Distribution:`, optionsCountDistribution);
console.log(`Questions involving code/functions/syntax: ${codeQuestionsCount}`);
console.log(`Topic Quiz Validation Issues Found: ${questionIssues.length}`);

// 3. Practice Data Verification
console.log('\n--- 3. PRACTICE SESSIONS DATA VERIFICATION ---');
let practiceIssues = [];
console.log(`Total Practice Questions: ${practiceData.length}`);

practiceData.forEach((item, idx) => {
  if (!item.id) practiceIssues.push({ idx, error: 'Missing practice item id' });
  if (!item.stage) practiceIssues.push({ idx, error: 'Missing stage' });
  if (!item.type) practiceIssues.push({ idx, error: 'Missing type' });

  if (item.type === 'quiz' || item.type === 'output-prediction' || item.type === 'find-the-bug') {
    if (!item.question || typeof item.question !== 'string') {
      practiceIssues.push({ idx, id: item.id, error: 'Missing question text in practice item' });
    }
    if (!item.options || !Array.isArray(item.options) || item.options.length < 2) {
      practiceIssues.push({ idx, id: item.id, error: 'Missing options in practice item' });
    } else {
      if (!item.correctAnswer || !item.options.includes(item.correctAnswer)) {
        practiceIssues.push({ idx, id: item.id, error: `correctAnswer "${item.correctAnswer}" not in options` });
      }
    }
    if (!item.explanation) {
      practiceIssues.push({ idx, id: item.id, error: 'Missing explanation in practice item' });
    }
  }
});
console.log(`Practice Issues Found: ${practiceIssues.length}`);

// 4. Projects Verification
console.log('\n--- 4. PROJECTS DATA VERIFICATION ---');
let projectIssues = [];
console.log(`Total Projects: ${projectsData.length}`);
projectsData.forEach((proj, idx) => {
  if (!proj.id || (!proj.name && !proj.title) || !proj.stage || !proj.codeSnippet) {
    projectIssues.push({ idx, id: proj.id, error: 'Malformed project item: missing id, name, stage or codeSnippet' });
  }
});
console.log(`Project Issues Found: ${projectIssues.length}`);

// 5. Negative Test / Validator Defense Audit
console.log('\n--- 5. NEGATIVE TEST / VALIDATOR SELF-AUDIT ---');
function validateQuestionObject(q) {
  const errs = [];
  if (!q.question || typeof q.question !== 'string' || !q.question.trim()) errs.push('Empty question');
  if (!Array.isArray(q.options) || q.options.length < 2) errs.push('Insufficient options (< 2)');
  if (new Set(q.options).size !== (q.options ? q.options.length : 0)) errs.push('Duplicate options');
  if (!q.correctAnswer || !q.options || !q.options.includes(q.correctAnswer)) errs.push('Answer not in options');
  if (!q.explanation || typeof q.explanation !== 'string' || !q.explanation.trim()) errs.push('Missing explanation');
  return errs;
}

const badQuestions = [
  { question: '', options: ['A', 'B'], correctAnswer: 'A', explanation: 'exp' },
  { question: 'What is 1+1?', options: ['2'], correctAnswer: '2', explanation: 'exp' },
  { question: 'What is 1+1?', options: ['2', '2'], correctAnswer: '2', explanation: 'exp' },
  { question: 'What is 1+1?', options: ['2', '3'], correctAnswer: '4', explanation: 'exp' },
  { question: 'What is 1+1?', options: ['2', '3'], correctAnswer: '2', explanation: '' }
];

let negativeTestsPassed = 0;
badQuestions.forEach((badQ, i) => {
  const errs = validateQuestionObject(badQ);
  if (errs.length > 0) {
    negativeTestsPassed++;
    console.log(`Negative Test ${i+1}: Correctly detected errors -> [${errs.join(', ')}]`);
  } else {
    console.error(`Negative Test ${i+1}: FAILED! Did not catch invalid question.`);
  }
});
console.log(`Negative Tests Passed: ${negativeTestsPassed}/${badQuestions.length}`);

console.log('\n===========================================================');
console.log('AUDIT SUMMARY:');
console.log(`Curriculum Sections: ${SECTIONS.length}`);
console.log(`Curriculum Topics: ${totalTopics}`);
console.log(`Quiz Combinations Tested: ${totalTopicQuizzes}`);
console.log(`Topic Questions Checked: ${totalTopicQuestions}`);
console.log(`Practice Questions Checked: ${practiceData.length}`);
console.log(`Total Validation Issues: ${questionIssues.length + practiceIssues.length + projectIssues.length}`);
console.log('===========================================================');
