import fs from 'fs';
import path from 'path';

export const getPages = () => {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const files = fs.readdirSync(pagesDir);
  return files
    .filter((file) => file.endsWith('.tsx') || file.endsWith('.js'))
    .filter((file) => !file.startsWith('_')) // Exclude _app.tsx, _document.tsx, etc.
    .filter((file) => file !== 'index.tsx') // Exclude index.tsx
    .map((file) => file.replace(/\.(tsx|js)$/, '')); // Remove file extension
};
