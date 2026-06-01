const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Fonction pour convertir une image JPEG en WebP
async function convertToWebP(inputPath) {
  const outputPath = inputPath.replace(/\.jpe?g$/i, '.webp');
  
  try {
    await sharp(inputPath)
      .webp({ quality: 85 }) // Qualité de 85% (bon compromis qualité/taille)
      .toFile(outputPath);
    
    console.log(`✓ Convertit : ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Erreur avec ${inputPath}:`, error.message);
  }
}

// Fonction pour parcourir un dossier et convertir toutes les images JPEG
async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Si c'est un dossier, on le parcourt récursivement
      await processDirectory(fullPath);
    } else if (stat.isFile() && /\.(jpe?g)$/i.test(file)) {
      // Si c'est un fichier JPEG, on le convertit
      await convertToWebP(fullPath);
    }
  }
}

// Démarrer le traitement depuis le dossier img
const imgDir = path.join(__dirname, 'img');
console.log('Démarrage de la conversion des images...\n');
processDirectory(imgDir)
  .then(() => {
    console.log('\n✅ Conversion terminée !');
  })
  .catch(error => {
    console.error('\n❌ Erreur générale:', error);
  });
