import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// List of images to copy
const images = [
  { src: 'herokishtwar.jpg.jpg', dest: 'herokishtwar.jpg' },
  { src: 'about.png', dest: 'about.png' },
  { src: 'food.jpg', dest: 'food.jpg' },
  { src: 'hotel.jpg', dest: 'hotel.jpg' },
  { src: 'explore.jpg', dest: 'history.jpg' } // Using explore.jpg as history image
];

// Copy each image
images.forEach(({ src, dest }) => {
  const sourcePath = path.join(__dirname, src);
  const destPath = path.join(assetsDir, dest);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${src} to ${dest}`);
  } else {
    console.error(`Source file ${src} not found`);
  }
}); 