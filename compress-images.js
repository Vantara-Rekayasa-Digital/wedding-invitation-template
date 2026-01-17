import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src/assets');

async function compressImages() {
    try {
        const files = fs.readdirSync(assetsDir);

        for (const file of files) {
            const filePath = path.join(assetsDir, file);
            const stat = fs.statSync(filePath);

            if (!stat.isFile()) continue;

            const ext = path.extname(file).toLowerCase();
            const fileName = path.basename(file, ext);

            console.log(`Processing: ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);

            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                // Convert to WebP
                const outputPath = path.join(assetsDir, `${fileName}.webp`);
                await sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                const newStat = fs.statSync(outputPath);
                const savings = ((stat.size - newStat.size) / stat.size * 100).toFixed(1);
                console.log(`  ✓ Converted to WebP: ${(newStat.size / 1024 / 1024).toFixed(2)} MB (${savings}% smaller)`);

                // Also optimize original format
                const optimizedPath = filePath;
                if (ext === '.png') {
                    await sharp(filePath)
                        .png({ compressionLevel: 9 })
                        .toFile(optimizedPath + '.tmp');
                    fs.renameSync(optimizedPath + '.tmp', optimizedPath);
                } else {
                    await sharp(filePath)
                        .jpeg({ quality: 85, progressive: true })
                        .toFile(optimizedPath + '.tmp');
                    fs.renameSync(optimizedPath + '.tmp', optimizedPath);
                }

                const optimizedStat = fs.statSync(optimizedPath);
                const origSavings = ((stat.size - optimizedStat.size) / stat.size * 100).toFixed(1);
                console.log(`  ✓ Optimized original: ${(optimizedStat.size / 1024 / 1024).toFixed(2)} MB (${origSavings}% smaller)`);
            }
        }

        console.log('\n✅ Compression complete!');
    } catch (err) {
        console.error('Error:', err);
    }
}

compressImages();
