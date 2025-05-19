import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  'about.png',
  'hotel.jpg',
  'explore.jpg',
  'rent.jpg',
  'food.jpg',
  'herokishtwar.jpg'
];

// Create public/assets directory if it doesn't exist
const publicAssetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

// Copy each image to public/assets
images.forEach(image => {
  const sourcePath = path.join(__dirname, 'src', 'assets', image);
  const destPath = path.join(publicAssetsDir, image);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${image} to public/assets`);
  } else {
    console.warn(`Warning: ${image} not found in src/assets`);
  }
}); 