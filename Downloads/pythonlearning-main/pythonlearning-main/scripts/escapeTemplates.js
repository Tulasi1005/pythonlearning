import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'allTopics.js');

for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace unescaped ${ with \${ inside the file except when export/import
  // We can do safe regex replacements on content
  // In python strings: $price, ${price}, etc.
  content = content.replace(/(?<!\\)\$\{/g, '\\${');
  
  fs.writeFileSync(filePath, content, 'utf-8');
}
console.log('Escaped ${ in all data files.');
