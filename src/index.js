import ModuleRepos from './modules/index.js';

import Parcel from 'parcel-bundler';
import axios from 'axios';

import { rmSync, mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'fs';
import { createHash } from 'crypto';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import githubPAT from './gh_pat.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const clonesDir = `${__dirname.replace('/src', '')}/clones`;

const distDir = `${__dirname.replace('/src', '')}/dist`;

const modulesDir = `${distDir}/module`;

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

const githubCache = {};

const getGithubInfo = async (repo) => {
  if (githubCache[repo]) return githubCache[repo];

  const info = (await axios.get(`https://api.github.com/repos/${repo}`, {
    headers: {
      'Authorization': `token ${githubPAT}`
    }
  })).data;

  githubCache[repo] = info;
  return info;
};

for (const repo of ModuleRepos) {
  // console.log(repo);
  console.time(repo.slice(0, 2).join(' @ ')+`${repo[2] ? ` ${repo[2]}` : ''}`);

  const githubInfo = await getGithubInfo(repo[0]);

  const url = `https://github.com/${repo[0]}.git`;
  const commitHash = repo[1];

  const preprocessor = repo[3];

  const name = repo[0];

  const moduleDir = repo[2] || '';

  const cloneDir = `${clonesDir}/${name}`;

  await new Promise((res) => exec(`git clone ${url} ${cloneDir}`, res));

  process.chdir(cloneDir);

  const lastHash = await new Promise((res) => exec(`git rev-parse HEAD`, (err, stdout) => res(stdout.trim())));

  await new Promise((res) => exec(`git checkout ${commitHash}`, res));

  if (preprocessor) {
    (await import(`./preprocessors/${preprocessor}.js`)).default(`${cloneDir}${moduleDir}`, repo);
  }

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

  const jsHash = createHash('sha512').update(jsCode).digest('hex');

  moduleJson.push({
    name: manifest.name,
    description: manifest.description,
    version: manifest.version,
    tags: manifest.tags,
    authors: manifest.authors,
    hash: jsHash,

    github: {
      stars: githubInfo.stargazers_count,
      repo: repo[0]
    }
  });

  console.timeEnd(repo.slice(0, 2).join(' @ ')+`${repo[2] ? ` ${repo[2]}` : ''}`);

  // console.log(lastHash);

  if (lastHash !== commitHash) {
    console.log('[Warning] Commit hash in modules does not match latest commit in repo');
  }
}

writeFileSync(`${distDir}/modules.json`, JSON.stringify(moduleJson));
copyFileSync(`${__dirname.replace('/src', '')}/_headers`, `${distDir}/_headers`);