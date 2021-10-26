import glob from 'glob';
import axios from 'axios';

import Env from '../src/env.js';

import { readFileSync, writeFileSync } from 'fs';
import { createInterface } from 'readline';
import { exec } from 'child_process';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const githubCache = {};

const getGithubInfo = async (repo) => {
  if (githubCache[repo]) return githubCache[repo];

  const info = (await axios.get(`https://api.github.com/repos/${repo}`, {
    headers: {
      'Authorization': `token ${Env.github}`
    }
  })).data;

  githubCache[repo] = info;
  return info;
};

const ask = (query) => new Promise((res) => rl.question(query, res));

const repoFiles = glob.sync(`src/modules/**/*.js`).filter((x) => x !== 'src/modules/index.js');

for (const file of repoFiles) {
  const modules = (await import('../' + file)).default;
  let content = readFileSync(file, 'utf8');

  for (const module of modules) {
    const [ repo, hash ] = module;
    if (!hash) continue;

    const [ { sha } ] = await getGithubInfo(repo + '/commits');

    if (sha === hash) continue;

    // exec(`xdg-open https://github.com/${repo}`);

    const ans = await ask(`${repo} is outdated - ${hash} -> ${sha}. update? (y/n) `);

    if (ans.toLowerCase() !== 'y') continue;

    console.log(`${repo}: ${hash} -> ${sha}`);

    content = content.replace(`'${repo}', '${hash}'`, `'${repo}', '${sha}'`);
  }

  writeFileSync(file, content);
}

rl.close();