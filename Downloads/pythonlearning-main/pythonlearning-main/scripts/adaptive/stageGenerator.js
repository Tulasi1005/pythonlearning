import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CURRICULUM_BLUEPRINT } from './curriculumBlueprint.js';
import { writeTopicFile } from './helper.js';
import { getTopicContent } from './topicKnowledgeBase.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../../src/data');

console.log("Generating 5-Stage Adaptive Content for all 19 sections (198 topics)...");

let totalTopicsGenerated = 0;

for (const section of CURRICULUM_BLUEPRINT) {
  const sectionTopics = section.topics.map(t => {
    const content = getTopicContent(t.concept, t.title, t.num, section.sectionId, section.sectionTitle);
    totalTopicsGenerated++;
    return {
      id: t.id,
      topicNumber: t.num,
      sectionId: section.sectionId,
      sectionTitle: section.sectionTitle,
      title: t.title,
      stages: content
    };
  });

  const filenameMap = {
    "python-basics": "pythonBasics.js",
    "operators": "operators.js",
    "conditions": "conditions.js",
    "loops": "loops.js",
    "strings": "strings.js",
    "lists": "lists.js",
    "tuples-sets-dicts": "tuplesSetsDicts.js",
    "functions": "functions.js",
    "modules": "modules.js",
    "exceptions": "exceptions.js",
    "oop": "oop.js",
    "files": "files.js",
    "advanced": "advanced.js",
    "databases": "databases.js",
    "apis": "apis.js",
    "web-development": "webDevelopment.js",
    "data-analysis": "dataAnalysis.js",
    "machine-learning": "machineLearning.js",
    "ai": "ai.js"
  };

  const varMap = {
    "python-basics": "pythonBasics",
    "operators": "operators",
    "conditions": "conditions",
    "loops": "loops",
    "strings": "strings",
    "lists": "lists",
    "tuples-sets-dicts": "tuplesSetsDicts",
    "functions": "functions",
    "modules": "modules",
    "exceptions": "exceptions",
    "oop": "oop",
    "files": "files",
    "advanced": "advanced",
    "databases": "databases",
    "apis": "apis",
    "web-development": "webDevelopment",
    "data-analysis": "dataAnalysis",
    "machine-learning": "machineLearning",
    "ai": "ai"
  };

  const fileName = filenameMap[section.sectionId];
  const varName = varMap[section.sectionId];
  if (fileName && varName) {
    writeTopicFile(path.join(DATA_DIR, fileName), varName, sectionTopics);
  }
}

console.log(`\n🎉 Successfully generated ${totalTopicsGenerated} topics with 5 stages across 19 sections!`);
