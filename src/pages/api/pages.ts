import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const getPages = () => {
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  try {
    const files = fs.readdirSync(pagesDir);
    return files
      .filter((file) => file.endsWith('.tsx') || file.endsWith('.js'))
      .filter((file) => !file.startsWith('_')) // Exclude _app.tsx, _document.tsx, etc.
      .filter((file) => file !== 'index.tsx') // Exclude index.tsx
      .map((file) => file.replace(/\.(tsx|js)$/, '')); // Remove file extension
  } catch (error) {
    console.error('Error reading pages directory:', error);
    return [];
  }
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const pages = getPages();
  res.status(200).json(pages);
};

export default handler;
