import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';

import generateThemeJS from './genericTheme.js';

export default async (themePath, repo) => {
  const content = readFileSync(themePath, 'utf8');
  
  const metaReg = /@([^ ]*) (.*)/g;

  let manifest = {
    main: 'index.js',
    tags: ['theme', 'port']
  };

  let match;
  while ((match = metaReg.exec(content)) !== null) {
    let [_, key, value] = match;
    if (key === 'import') break;

    value = value.trim();

//    console.log(key, value);

    switch (key) {
      case 'name':
        manifest.name = value;
        break;

      case 'description':
        manifest.description = value;
        break;

      case 'version':
        manifest.version = value;
        break;

      case 'author':
        manifest.authors = [ value ];
        break;

      case 'authorId':
        manifest.authors = [ value ];
        break;
    }
  }

  rmSync(themePath);
  mkdirSync(themePath);

  const jsCode = await generateThemeJS(manifest, content, repo);

  writeFileSync(`${themePath}/goosemodModule.json`, JSON.stringify(manifest));
  writeFileSync(`${themePath}/index.js`, jsCode);
};
