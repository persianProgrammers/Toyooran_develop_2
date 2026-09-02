const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/images');
const files = fs.readdirSync(dir).filter(f => f.startsWith('article_') && f.endsWith('.jpg'));

async function processImages() {
  for (const file of files) {
    const filePath = path.join(dir, file);
    const tempPath = path.join(dir, 'temp_' + file);
    
    console.log(`Optimizing ${file}...`);
    await sharp(filePath)
      .resize(1000, null, { withoutEnlargement: true })
      .jpeg({ progressive: true, quality: 75 })
      .toFile(tempPath);
      
    fs.renameSync(tempPath, filePath);
    console.log(`${file} optimized.`);
  }
}

processImages().catch(console.error);
