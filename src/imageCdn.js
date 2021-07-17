import { createWriteStream, mkdirSync, copyFileSync, rmSync } from 'fs';
import { join } from 'path';
import { exec } from 'child_process';

import axios from 'axios';

export default (manifest) => {
  const baseDir = join(distDir, 'img', manifest.name);

  return manifest.images ? Promise.all(manifest.images.map(async (x, i) => {
    mkdirSync(baseDir, { recursive: true });

    if (Array.isArray(x)) {
      const finalName = `${i}.png`;
      const finalFile = join(baseDir, finalName);

      // console.log('colors', x, i, finalFile);

      let i2 = 0;
      for (const c of x) {
        const file = join(baseDir, `${i2}.png`);
        c[2] = file;

        console.log(c, file);

        await new Promise((res) => exec(`convert -size 212x112 xc:${c[1].replace('(', '\\(').replace(')', '\\)')} "${file}"`, res));

        i2++;
      }

      console.log(x);

      await new Promise((res) => exec(`montage ${x.map((c) => `"${c[2]}"`).join(' ')} -background "#101418" -tile 2x3 -geometry +6+6 - | convert - -trim "${finalFile}"`, res));

      i2 = 0;
      for (const c of x) {
        const text = c[0].substring(2).replaceAll('-', ' ').replace('background ', '').replace(/\w\S*/g, (_) => _[0].toUpperCase() + _.substring(1).toLowerCase());

        await new Promise((res) => exec(`convert -font 'Noto-Sans-Regular' -fill white -pointsize 20 -draw 'text ${(Math.floor(i2 / 3) * 230) + 100 - (text.length * 4)},${70 + (i2 % 3) * 125} "${text}"' "${finalFile}" "${finalFile}"`, res));

        i2++;
      }

      return `/img/${manifest.name}/${finalName}`;
    }


    const rawFile = join(baseDir, x.split('/').pop());
    const rawExt = rawFile.split('.').pop();

    const finalName = `${i}.${rawExt === 'gif' ? 'gif' : 'png'}`;
    const finalFile = join(baseDir, finalName);

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