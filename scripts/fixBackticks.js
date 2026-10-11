import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'allTopics.js');

for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Let's replace internal unescaped backticks that are NOT string boundaries
  // Strategy: Replace field template strings `...` by properly escaping any inner `
  // We can match patterns like: explanation: `...` or code: `...` or answer: `...`
  
  // We can write a custom tokenizer to safely escape backticks inside template literal values
  let result = '';
  let inTemplate = false;
  let i = 0;
  
  while (i < content.length) {
    if (content[i] === '`') {
      // Check if this ` is opening or closing a property value
      // Look behind for property prefixes like ': `' or '[`' or ', `' or start of array
      // Look ahead for property endings like '`,' or '`\n' or '` }'
      const before = content.slice(Math.max(0, i - 20), i);
      const after = content.slice(i + 1, Math.min(content.length, i + 20));
      
      const isStart = /(:|\(|\[|,)\s*$/.test(before);
      const isEnd = /^\s*(,|\n|;|\)|\]|\})/.test(after);

      if (!inTemplate && isStart) {
        inTemplate = true;
        result += '`';
      } else if (inTemplate && isEnd) {
        inTemplate = false;
        result += '`';
      } else {
        // Inner backtick! Escape it
        result += '\\`';
      }
    } else {
      result += content[i];
    }
    i++;
  }
  
  fs.writeFileSync(filePath, result, 'utf-8');
}

console.log('Fixed backticks in data files.');
