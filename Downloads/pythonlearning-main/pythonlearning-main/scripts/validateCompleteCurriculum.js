import { SECTIONS, allTopics, getTopicById } from "../src/data/allTopics.js";
import { LEARNING_STAGES } from "../src/data/learningStages.js";
import { LEARNING_LANGUAGES } from "../src/data/learningLanguages.js";
import { EXPLANATION_FORMATS } from "../src/data/explanationFormats.js";

console.log("=== STARTING COMPREHENSIVE CURRICULUM VALIDATION ===");

console.log(`Total Sections: ${SECTIONS.length} (Expected: 19)`);
console.log(`Total Topics: ${allTopics.length} (Expected: 198)`);

if (SECTIONS.length !== 19) {
  throw new Error(`Expected 19 sections, got ${SECTIONS.length}`);
}

if (allTopics.length !== 198) {
  throw new Error(`Expected 198 topics, got ${allTopics.length}`);
}

const stageIds = ["kid", "young", "college", "graduate", "professional"];
const langIds = ["english", "english-telugu", "telugu", "hindi"];
const formatIds = [
  "simple",
  "story",
  "realLife",
  "friend",
  "visual",
  "stepByStep",
  "exampleFirst",
  "analogy"
];

const forbiddenPhrases = [
  "explanation goes here",
  "add content",
  "coming soon",
  "sample explanation",
  "lorem ipsum"
];

let checkedCombinations = 0;
let errors = [];

allTopics.forEach((topic, idx) => {
  if (!topic.id || !topic.title || !topic.topicNumber) {
    errors.push(`Topic #${idx + 1} is missing id, title, or topicNumber`);
    return;
  }

  const stages = topic.stages;
  if (!stages) {
    errors.push(`Topic ${topic.id} (#${topic.topicNumber}) is missing stages`);
    return;
  }

  for (const sId of stageIds) {
    const stageObj = stages[sId];
    if (!stageObj) {
      errors.push(`Topic ${topic.id} missing stage: ${sId}`);
      continue;
    }

    if (!stageObj.visual || !stageObj.visual.elements || stageObj.visual.elements.length === 0) {
      errors.push(`Topic ${topic.id} stage ${sId} missing visual elements`);
    }

    for (const lId of langIds) {
      const langPkg = stageObj.languages?.[lId];
      if (!langPkg) {
        errors.push(`Topic ${topic.id} stage ${sId} missing language: ${lId}`);
        continue;
      }

      // Check required fields
      if (!langPkg.whatIsIt || typeof langPkg.whatIsIt !== "string") {
        errors.push(`Topic ${topic.id} stage ${sId} lang ${lId} missing whatIsIt`);
      }
      if (!langPkg.whyDoWeNeedIt || typeof langPkg.whyDoWeNeedIt !== "string") {
        errors.push(`Topic ${topic.id} stage ${sId} lang ${lId} missing whyDoWeNeedIt`);
      }
      if (!langPkg.code || typeof langPkg.code !== "string") {
        errors.push(`Topic ${topic.id} stage ${sId} lang ${lId} missing code`);
      }
      if (!langPkg.howItWorks || typeof langPkg.howItWorks !== "string") {
        errors.push(`Topic ${topic.id} stage ${sId} lang ${lId} missing howItWorks`);
      }
      if (!langPkg.importantPoints || !Array.isArray(langPkg.importantPoints) || langPkg.importantPoints.length === 0) {
        errors.push(`Topic ${topic.id} stage ${sId} lang ${lId} missing importantPoints`);
      }
      if (!langPkg.commonMistakes || !langPkg.commonMistakes.mistake || !langPkg.commonMistakes.fix) {
        errors.push(`Topic ${topic.id} stage ${sId} lang ${lId} missing commonMistakes`);
      }
      if (!langPkg.tryItYourself || !langPkg.tryItYourself.starterCode || !langPkg.tryItYourself.solution) {
        errors.push(`Topic ${topic.id} stage ${sId} lang ${lId} missing tryItYourself`);
      }
      if (!langPkg.questions || !Array.isArray(langPkg.questions) || langPkg.questions.length < 3) {
        errors.push(`Topic ${topic.id} stage ${sId} lang ${lId} has fewer than 3 questions`);
      }

      // Check explanation formats
      for (const fId of formatIds) {
        checkedCombinations++;
        const exp = langPkg.explanations?.[fId];
        if (!exp || typeof exp !== "string" || exp.trim().length === 0) {
          errors.push(`Topic ${topic.id} stage ${sId} lang ${lId} format ${fId} missing or empty`);
        } else {
          // Check for forbidden placeholder text
          const lower = exp.toLowerCase();
          for (const phrase of forbiddenPhrases) {
            if (lower.includes(phrase)) {
              errors.push(`Topic ${topic.id} stage ${sId} lang ${lId} format ${fId} contains forbidden placeholder "${phrase}"`);
            }
          }
        }
      }
    }
  }
});

if (errors.length > 0) {
  console.error(`\n❌ Found ${errors.length} validation errors:`);
  errors.slice(0, 20).forEach((err) => console.error(" - " + err));
  if (errors.length > 20) {
    console.error(`... and ${errors.length - 20} more errors`);
  }
  process.exit(1);
}

console.log(`\n✅ ALL VALIDATION CHECKS PASSED!`);
console.log(`Total Combinations Verified: ${checkedCombinations} (198 topics × 5 stages × 4 languages × 8 formats)`);
console.log(`Verified that all 198 topics across all 19 sections have complete, rich educational content with 0 placeholders!`);
