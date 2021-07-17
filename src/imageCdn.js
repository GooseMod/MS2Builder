import { createWriteStream, mkdirSync, copyFileSync, rmSync } from 'fs';
import { join } from 'path';
import { exec } from 'child_process';

import axios from 'axios';

export default (manifest) => {
  const baseDir = join(distDir, 'img', manifest.name);

  return manifest.images ? Promise.all(manifest.images.map(async (x, i) => {
    const rawFile = join(baseDir, x.split('/').pop());
    const rawExt = rawFile.split('.').pop();

    const finalName = `${i}.${rawExt === 'gif' ? 'gif' : 'png'}`;
    const finalFile = join(baseDir, finalName);

    mkdirSync(baseDir, { recursive: true });

    if (!x.includes('http')) {
      console.log('color', x, i, finalFile);

      try {
        await new Promise((res) => exec(`convert -size 330x200 xc:${x.replace('(', '\\(').replace(')', '\\)')} "${finalFile}"`, res));
      } catch (e) {
        console.error('Failed to use ImageMagick to resize and compress, copying file as backup');
        // copyFileSync(rawFile, finalFile);
      }

      return `/img/${manifest.name}/${finalName}`;
    }

    console.log(x, i, rawFile, finalFile);

    const writer = createWriteStream(rawFile);
    const resp = await axios.get(x, {
      responseType: 'stream'
    });

    resp.data.pipe(writer);

    await new Promise((res, rej) => {
      writer.on('finish', res);
      writer.on('error', rej);
    });

    if (rawExt !== 'gif') {
      try {
        await new Promise((res) => exec(`convert "${rawFile}" -resize x720 -quality 90 "${finalFile}"`, res));
      } catch (e) {
        console.error('Failed to use ImageMagick to resize and compress, copying file as backup');
        copyFileSync(rawFile, finalFile);
      }
    } else {
      copyFileSync(rawFile, finalFile);
    }

    try {
      rmSync(rawFile);
    } catch (e) { }

    return `/img/${manifest.name}/${finalName}`;
  })) : [];
};