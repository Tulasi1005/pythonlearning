import fs from "fs";
import path from "path";
import { CURRICULUM_BLUEPRINT } from "../src/data/curriculumBlueprint.js";

const sectionExports = [
  { sectionId: "python-basics", file: "pythonBasics.js", exportName: "pythonBasics" },
  { sectionId: "operators", file: "operators.js", exportName: "operators" },
  { sectionId: "conditions", file: "conditions.js", exportName: "conditions" },
  { sectionId: "loops", file: "loops.js", exportName: "loops" },
  { sectionId: "strings", file: "strings.js", exportName: "strings" },
  { sectionId: "lists", file: "lists.js", exportName: "lists" },
  { sectionId: "tuples-sets-dicts", file: "tuplesSetsDicts.js", exportName: "tuplesSetsDicts" },
  { sectionId: "functions", file: "functions.js", exportName: "functions" },
  { sectionId: "modules", file: "modules.js", exportName: "modules" },
  { sectionId: "exceptions", file: "exceptions.js", exportName: "exceptions" },
  { sectionId: "oop", file: "oop.js", exportName: "oop" },
  { sectionId: "files", file: "files.js", exportName: "files" },
  { sectionId: "advanced", file: "advanced.js", exportName: "advanced" },
  { sectionId: "databases", file: "databases.js", exportName: "databases" },
  { sectionId: "apis", file: "apis.js", exportName: "apis" },
  { sectionId: "web-development", file: "webDevelopment.js", exportName: "webDevelopment" },
  { sectionId: "data-analysis", file: "dataAnalysis.js", exportName: "dataAnalysis" },
  { sectionId: "machine-learning", file: "machineLearning.js", exportName: "machineLearning" },
  { sectionId: "ai", file: "ai.js", exportName: "ai" }
];

const dataDir = path.resolve("src/data");

for (const sec of sectionExports) {
  const blueprintSec = CURRICULUM_BLUEPRINT.find(s => s.sectionId === sec.sectionId);
  if (!blueprintSec) {
    console.error(`Missing section ${sec.sectionId}`);
    continue;
  }

  const content = `// Section: ${blueprintSec.sectionTitle}
import { CURRICULUM_BLUEPRINT } from "./curriculumBlueprint.js";
import { getTopicContent } from "./topicKnowledgeBase.js";

const sectionDef = CURRICULUM_BLUEPRINT.find((s) => s.sectionId === "${sec.sectionId}");

export const ${sec.exportName} = sectionDef.topics.map((t) => ({
  id: t.id,
  topicNumber: t.num,
  sectionId: sectionDef.sectionId,
  sectionTitle: sectionDef.sectionTitle,
  title: t.title,
  concept: t.concept,
  get stages() {
    return getTopicContent(t.concept, t.title, t.num, sectionDef.sectionId, sectionDef.sectionTitle);
  }
}));
`;

  const filePath = path.join(dataDir, sec.file);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Generated lightweight section file: ${sec.file} (${blueprintSec.topics.length} topics)`);
}

console.log("All 19 section files generated with lazy getters successfully!");
