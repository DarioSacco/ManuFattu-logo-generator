/**
 * Scriptino che deploya i file buildati (dentro `dist`) nel branch della github page (`gh-pages`).
 * Se non riesce a pushare provare a cancellare il branch remoto
 * > git push --delete origin gh-pages
 *
 * poi creare un subtree
 * > git subtree push --prefix dist origin gh-pages
 *
 * poi riprovare a lanciare lo script.
 *
 * NB: Lanciare il comando solo dal branch `gh-pages`.
 */

const { execSync } = require("child_process");

function run(command) {
  if (!command) {
    return console.log('> Non posso runnare un comando vuoto, bro...');
  }

  console.log(`> Running command "${command}"...\n`);
  const result = execSync(command).toString().trim();
  if (result) {
    console.log(`> Result: ${result}`);
  }

  return result;
}

function deploy() {
  const currentBranch = run('git branch --show-current');

  if (currentBranch !== 'gh-pages') {
    throw Error(`Scusa bro, sei nel branch sbagliato ("${currentBranch}").
      Vai a fa...
      ... a fare checkout di "gh-pages".
    `);
  }

  process.chdir('./dist');

  [
    'git init -b main',
    'git add -A',
    'git commit -m "deploy"',
    'git push -f git@github.com:DarioSacco/ManuFattu-logo-generator.git main:gh-pages',
  ].forEach(run);
}

deploy();
