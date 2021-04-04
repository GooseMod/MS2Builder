import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';

export default (manifestPath, repo) => {
  const pcManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

  let manifest = {
    main: 'index.js',
    tags: ['port'],

    name: pcManifest.name,
    description: pcManifest.description,

    version: pcManifest.version,
    authors: [ pcManifest.author ]
  };

  rmSync(manifestPath);
  mkdirSync(manifestPath);

  const content = readFileSync(pcManifest.main || 'index.js', 'utf8');//.replace(/\\/g, '\\\\').replace(/`/g, '\\`');

  const jsCode = content.replace(`module.exports = class`, `export default new class`).replace(/{ *Plugin *}/, `{ Plugin, powercord }`);

  writeFileSync(`${manifestPath}/goosemodModule.json`, JSON.stringify(manifest));
  writeFileSync(`${manifestPath}/index.js`, jsCode);
};
