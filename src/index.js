import ModuleRepos from './modules.js';

import Parcel from 'parcel-bundler';

import { rmSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const clonesDir = `${__dirname.replace('/src', '')}/clones`;

const distDir = `${__dirname.replace('/src', '')}/dist`;

const modulesDir = `${distDir}/modules`;

const resetDir = (dir) => {
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir);
};

resetDir(clonesDir);

resetDir(distDir);
resetDir(modulesDir);

import { exec } from 'child_process';

const parcelOptions = {
  minify: true,
  watch: false,
  sourceMaps: false,
  outDir: modulesDir,
  logLevel: 0
};

let moduleJson = [];

for (const repo of ModuleRepos) {
  // console.log(repo);
  console.time(repo.slice(0, 2).join(' @ ')+`${repo[2] ? ` ${repo[2]}` : ''}`);

  const url = `https://github.com/${repo[0]}.git`;
  const commitHash = repo[1];

  const name = repo[0];

  const moduleDir = repo[2] || '';

  const cloneDir = `${clonesDir}/${name}`;

  await new Promise((res) => exec(`git clone ${url} ${cloneDir}`, res));

  process.chdir(cloneDir);

  const lastHash = await new Promise((res) => exec(`git rev-parse HEAD`, (err, stdout) => res(stdout.trim())));

  await new Promise((res) => exec(`git checkout ${commitHash}`, res));

  const manifest = JSON.parse(readFileSync(`${cloneDir}${moduleDir}/goosemodModule.json`));

  // console.log(manifest);

  const outFile = `${manifest.name}.js`;

  const bundler = new Parcel(`${cloneDir}${moduleDir}/${manifest.main}`, Object.assign(parcelOptions, {
    outFile
  }));

  const bundle = await bundler.bundle();

  const outPath = `${modulesDir}/${outFile}`;
  let jsCode = readFileSync(outPath, 'utf8');

  jsCode = `${jsCode};parcelRequire('${bundle.entryAsset.basename}').default`; // Make eval return the index module's default export

  // console.log(jsCode);

  writeFileSync(outPath, jsCode);

  moduleJson.push({
    name: manifest.name,
    description: manifest.description,
    version: manifest.version,
    tags: manifest.tags,
    authors: manifest.authors
  });

  console.timeEnd(repo.slice(0, 2).join(' @ ')+`${repo[2] ? ` ${repo[2]}` : ''}`);

  // console.log(lastHash);

  if (lastHash !== commitHash) {
    console.log('[Warning] Commit hash in modules does not match latest commit in repo');
  }
}

writeFileSync(`${distDir}/modules.json`, JSON.stringify(moduleJson));