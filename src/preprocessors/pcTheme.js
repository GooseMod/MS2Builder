import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import sass from 'sass';

import generateThemeJS from './genericTheme.js';

export default async (manifestPath, repo) => {
  const pcManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

  let manifest = {
    main: 'index.js',
    tags: ['theme', 'port'],

    name: pcManifest.name,
    description: pcManifest.description,

    version: pcManifest.version,
    authors: [ pcManifest.author ]
  };

  rmSync(manifestPath);
  mkdirSync(manifestPath);

  if (pcManifest.theme.split('.').pop() === 'scss') {
    const cssPath = pcManifest.theme.split('.').slice(0, -1).concat('css').join('.');

    const compiled = (sass.renderSync({ file: pcManifest.theme })).css;
    writeFileSync(cssPath, compiled);

    pcManifest.theme = cssPath;
  }

  const content = readFileSync(pcManifest.theme, 'utf8');

  const jsCode = await generateThemeJS(manifest, content, repo);

  writeFileSync(`${manifestPath}/goosemodModule.json`, JSON.stringify(manifest));
  writeFileSync(`${manifestPath}/index.js`, jsCode);
};
