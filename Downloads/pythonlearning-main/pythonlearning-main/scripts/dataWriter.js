import fs from 'fs';
import path from 'path';

// Helper to write data file cleanly using JSON.stringify
export function writeCleanData(fileName, exportName, data) {
  const filePath = path.resolve('src/data', fileName);
  const fileContent = `export const ${exportName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`Successfully generated ${fileName}`);
}
