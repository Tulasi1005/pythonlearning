import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.join(__dirname, '../src/data/topicKnowledgeBase.js');

console.log("Generating comprehensive topic knowledge base at:", targetPath);
