import fs from 'fs';
import path from 'path';

export function writeTopicFile(filePath, varName, data) {
  const content = `// Age-Adapted 5-Stage Python Curriculum\nexport const ${varName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[SAVED] ${filePath} (${data.length} topics)`);
}
