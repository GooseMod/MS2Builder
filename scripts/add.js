import { createInterface } from 'readline';
import { readFileSync, writeFileSync } from 'fs';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const [ type1, type2, repo ] = process.argv.slice(2);

console.log(type1, type2, repo);

const repeatAsk = async (prompt) => {
  const answers = [];

  const ask = async () => {
    return await new Promise((resp) => {
      rl.question(prompt, (ans) => {
        resp(ans);
      });
    });
  };

  let ans;

  while (ans !== '') {
    ans = await ask();
    if (ans === '') break;

    answers.push(ans);
  }

  console.log();

  return answers;
};

const authors = await repeatAsk(`Add Author (leave blank if no more) > `);

console.log(authors);

const images = await repeatAsk(`Add Image (leave blank if no more) > `);

console.log(images);

let js, file;

switch (type1) {
  case 'theme': {
    switch (type2) {
      case 'pc': {
        file = `src/modules/ports/themes/pcThemes.js`;
        js = `  ['${repo}', '', '/powercord_manifest.json', 'pcTheme', {
    authors: ${JSON.stringify(authors)},
    images: ${JSON.stringify(images)}
  }],`;
    
        break;
      }
    }

    break;
  }
}

console.log(js, file);

let contents = readFileSync(file, 'utf8').split('\n');

contents.splice(-1, 0, '', ...js.split('\n'));

contents = contents.join('\n');

writeFileSync(file, contents);

rl.close();