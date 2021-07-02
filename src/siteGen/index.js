import { readFileSync, writeFileSync, copyFileSync } from "fs";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import glob from 'glob';

const __dirname = dirname(fileURLToPath(import.meta.url));

const genAuthors = (a) => {
  let authors = [];

  if (typeof a === "string") {
    authors = a.split(', ');
  } else if (Array.isArray(a)) {
    authors = a;
  };
  
  return authors.map((x, i) => {
    if (typeof x === 'object') { // User object
      const pfp = `<img loading=lazy style="display: inline; border-radius: 50%; margin-right: 5px; vertical-align: bottom;" src="https://cdn.discordapp.com/avatars/${x.i}/${x.a}.png?size=32">`;
      const name = `<span class="author" style="line-height: 32px;">${x.n}</span>`; //<span class="description-3_Ncsb">#${result.discriminator}</span></span>`;

      return i > 1 ? pfp : pfp + name;
    }
    
    let idMatch = x.match(/(.*) \(([0-9]{17,18})\)/); // "<name> (<id>)"
    if (idMatch === null) return `<span class="author">${x}</span>`; // "<name>"

    return `<span class="author">${idMatch[1]}</span>`;
  }).join('<span class="description-3_Ncsb">,</span> ');
};

const makeCard = (m) => {
  const authors = genAuthors(m.authors);
return `<div class="gm-store-card ${m.tags.join(' ')}" data-last-updated=${m.lastUpdated} data-stars=${m.github.stars}>
  <div style="background-image: url('${m.images?.length ? m.images[0] : ''}');"></div>
  <div class="title-31JmR4 ${!authors.includes('avatar') ? 'no-pfp' : ''}">${authors}</div>
  <div class="title-31JmR4">${m.name}</div>
  <div class="colorStandard-2KCXvj size14-e6ZScH default-3nhoK- formText-3fs7AJ description-3_Ncsb formText-3fs7AJ modeDefault-3a2Ph1">${m.description}</div>
  <div>
    <div class="colorStandard-2KCXvj size14-e6ZScH default-3nhoK- formText-3fs7AJ description-3_Ncsb formText-3fs7AJ modeDefault-3a2Ph1">
      <span>${m.github.stars}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path></svg>
    </div>
    <div class="colorStandard-2KCXvj size14-e6ZScH default-3nhoK- formText-3fs7AJ description-3_Ncsb formText-3fs7AJ modeDefault-3a2Ph1">${m.version === '0' || m.version.toLowerCase().includes('auto') ? '' : `v${m.version}`}</div>
  </div>
</div>`;
};

const makeRepo = (r) => {
  return `<a href="${r.filename}" class="repo">
  <div>
    <div class="title-31JmR4">${r.name}</div>
    <div class="colorStandard-2KCXvj size14-e6ZScH default-3nhoK- formText-3fs7AJ description-3_Ncsb formText-3fs7AJ modeDefault-3a2Ph1">${r.description}</div>
  </div>

  <div class="colorStandard-2KCXvj size14-e6ZScH default-3nhoK- formText-3fs7AJ description-3_Ncsb formText-3fs7AJ modeDefault-3a2Ph1">
    <div><strong>${r.themes}</strong> themes</div>
    <div><strong>${r.plugins}</strong> plugins</div>
    <div><strong>${r.developers}</strong> developers</div>
  </div>
</a>`;
};

export default () => {
  let template = readFileSync(join(__dirname, 'template.html'), 'utf8');

  const repos = glob.sync(join(global.distDir, '*.json'));

  let cards = [];
  let metas = [];

  let name = 'GooseMod Store';
  let description = '';

  for (const repo of repos) {
    console.log(repo);

    const json = JSON.parse(readFileSync(repo, 'utf8'));

    if (repos.length === 1) { // 1 repo likely means a custom repo, so use that name and description
      name = json.meta.name;
      description = `${json.meta.description} `;
    }

    cards = cards.concat(json.modules);

    metas.push({
      ...json.meta,

      themes: json.modules.filter((x) => x.tags.includes('theme')).length,
      plugins: json.modules.filter((x) => !x.tags.includes('theme')).length,

      developers: Object.keys(json.modules.reduce((acc, x) => { (!Array.isArray(x.authors) ? [ x.authors ] : x.authors).forEach((a) => acc[typeof a === 'object' ? a.i : a] = true); return acc; }, {})).length,

      filename: repo.split('/').pop()
    });
  }

  description += `Browse ${cards.filter((x) => x.tags.includes('theme')).length} themes and ${cards.filter((x) => !x.tags.includes('theme')).length} plugins from ${Object.keys(cards.reduce((acc, x) => { (!Array.isArray(x.authors) ? [ x.authors ] : x.authors).forEach((a) => acc[typeof a === 'object' ? a.i : a] = true); return acc; }, {})).length} developers.`;

  cards = cards.sort((a, b) => a.name.localeCompare(b.name)).map((x) => makeCard(x));

  template = template
              .replace('ALL_CARDS', cards.join('\n'))
              .replace('REPOS', metas.map((x) => makeRepo(x)).join('\n'))
              .replaceAll('NAME', name)
              .replaceAll('DESCRIPTION', description);

  writeFileSync(join(global.distDir, 'index.html'), template);

  copyFileSync(join(__dirname, 'NotoSans-Medium.ttf'), join(global.distDir, 'NotoSans-Medium.ttf'));
};