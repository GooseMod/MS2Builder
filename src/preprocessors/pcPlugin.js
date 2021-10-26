import { join } from 'path';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';

import sass from 'sass';
import glob from 'glob';

export default (manifestPath, repo) => {
  const baseDir = join(manifestPath, '..');

  const pcManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

  let manifest = {
    main: 'index.js',
    tags: ['port'],

    name: pcManifest.name,
    description: pcManifest.description,

    version: pcManifest.version,
    authors: [ pcManifest.author ]
  };

  let content = readFileSync(pcManifest.main || 'index.js', 'utf8');//.replace(/\\/g, '\\\\').replace(/`/g, '\\`');

  content = content.replace(`module.exports = `, `export default new `); // CJS -> ESM, and use new to init class

  content = content.replace(/this\.loadStylesheet\(['"`](.*)['"`]\)/g, (_, relative) => { // Replace Plugin.loadStylesheet(filename) -> Plugin.loadStylesheet(css_code) loaded from FS
    const path = manifestPath.split('/').slice(0, -1).concat('').join('/') + relative;

    let css;

    if (path.split('.').pop() === 'scss') {
      css = (sass.renderSync({ file: path })).css.toString('utf8');
    } else {
      css = readFileSync(path, 'utf8');
    }

    css = css.replace(/\\/g, '\\\\').replace(/\`/g, '\`'); // Escape backticks

    return `this.loadStylesheet(\`${css}\`)`;
  });

  content = content.replace(/([\( \t]|^)([0-9]+)n([\) ;]|$)/gm, (_, _pre, num) => _.replace(num + 'n', 'BigInt(' + num + ')')); // Replace new / modern BigInt format (10n) with constructor (BigInt(10))

  writeFileSync(join(baseDir, `index.js`), content);

  for (const jsFile of glob.sync(`${baseDir}/**/*.{js,jsx,ts,tsx}`)) {
    console.log(jsFile);
    let content = readFileSync(jsFile, 'utf8');

    /* Here we preappend some JS to each file to match context and fix some weird bundler bugs:
      - Import our own Powercord global
      - Fix dynamic imports (like using require("powercord/" + someVariable)) causing errors (due to no static analyse). Do this because some plugins use it for PC + VZ compat with the same JS
    */

    content = `import powercord from '_powercord/global';
require.cache['powercord/entities'] = require('powercord/entities');
require.cache['powercord/components/settings'] = require('powercord/components/settings');
require.cache['powercord/webpack'] = require('powercord/webpack');

${content}`;

    writeFileSync(jsFile, content);
  }

  writeFileSync(join(baseDir, `goosemodModule.json`), JSON.stringify(manifest));

  return '';
};
