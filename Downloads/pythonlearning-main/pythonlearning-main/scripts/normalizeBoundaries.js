import fs from 'fs';
import path from 'path';

// Let's create a builder that cleans up any escaped backticks at string boundaries
const dataDir = path.resolve('src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'allTopics.js');

for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Fix escaped backtick at boundary: \` -> `
  // e.g., code: \`... -> code: `...
  content = content.replace(/(:\s*)\\`/g, '$1`');
  content = content.replace(/\\`(,|\s*\}|\s*\]|\s*\))/g, '`$1');
  content = content.replace(/\\`\s*$/gm, '`');

  fs.writeFileSync(filePath, content, 'utf-8');
}
console.log('Normalized boundary backticks.');
