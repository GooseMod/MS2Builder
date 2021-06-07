import { exec } from 'child_process';

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, readFileSync } from 'fs';

import glob from 'glob';

function underline(text) {
  return `\x1b[4m${text}\x1b[0m`;
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const { alias } = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf8'));


const clonesDir = join(__dirname, '..', 'clones');

const [ repo ] = process.argv.slice(2);

const cloneDir = join(clonesDir, repo);
const url = `https://github.com/${repo}.git`;

console.log(cloneDir, url);

if (!existsSync(cloneDir)) {
  await new Promise((res) => exec(`git clone ${url} ${cloneDir}`, res));
}

console.log();

for (const jsFile of glob.sync(`${cloneDir}/**/*.js`).concat(glob.sync(`${cloneDir}/**/*.jsx`))) {
  console.log(underline(jsFile.replace(cloneDir, '')));

  const js = readFileSync(jsFile, 'utf8');

  let match;
  const importRegex = /{ *(.*,*) *} *= *require\(('|"|`)(.*)('|"|`)\)/g;

  while ((match = importRegex.exec(js)) !== null) {
    let [ _1, imports, _2, requirePath, _3 ] = match;
    imports = imports.trim();

    if (requirePath.includes('.')) continue;

    const aliasPath = alias[requirePath];

    if (!aliasPath) {
      console.log('No alias', requirePath, '(', imports, ')');
      continue;
    }

    const aliasJS = readFileSync(join(__dirname, '..', aliasPath), 'utf8');

    for (let imp of imports.split(',')) {
      imp = imp.trim().split(':')[0];

      const searchRegex1 = new RegExp(`^export.*${imp}.*$`, 'gm');
      const searchRegex2 = new RegExp(`^ *${imp}[:,]`, 'gm');

      const searchMatch = aliasJS.match(searchRegex1) || aliasJS.match(searchRegex2);

      if (!searchMatch) {
        if (requirePath === 'powercord/webpack') {
          const webpackJS = readFileSync(join(__dirname, '..', '..', 'GooseMod', 'src', 'util', 'discord', 'webpackModules.js'), 'utf8');

          if (imp.startsWith('getModule') || webpackJS.includes(`obj.common.${imp}`)) {
            continue;
          }
        }

        if (requirePath === 'powercord/util') {
          const webpackJS = readFileSync(join(__dirname, '..', '..', 'GooseMod', 'src', 'util', 'react.js'), 'utf8');

          if (webpackJS.includes(`export function ${imp}`)) {
            continue;
          }
        }

        if (requirePath === 'powercord/injector') {
          continue;
        }

        console.log('No export', requirePath, imp);
      }
    }
  }

  console.log();
}
