
const fs = require('fs');
const path = require('path');

function getConfig(baseDir = '') {
  const name = process.argv[2];
  const config = {};

  config.camel = getCamel(name);
  config.caps = getCaps(name);
  config.name = name;
  config.pascal = getPascal(name);
  config.path = path.resolve('src', 'app', baseDir, name);
  config.title = getTitle(name);

  console.log('config: \n', config);
  return config;
}

function getCamel(str) {
  let pieces = str.split('-');
  let camel = '';
  for (let piece of pieces) {
    if (camel === '') {
      camel += piece;
    } else {
      camel += piece.charAt(0).toUpperCase() + piece.slice(1);
    }
  }
  return camel;
}

function getCaps(str) {
  let pieces = str.split('-');
  let caps = '';
  for (let piece of pieces) {
    if (caps !== '') {
      caps += '_';
    }
    caps += piece.toUpperCase()
  }
  return caps;
}

function getPascal(str) {
  let pieces = str.split('-');
  let pascal = '';
  for (let piece of pieces) {
    pascal += piece.charAt(0).toUpperCase() + piece.slice(1);
  }
  return pascal;
}

function getTitle(str) {
  let pieces = str.split('-');
  let title = '';
  for (let piece of pieces) {
    if (title !== '') {
      title += ' ';
    }
    title += piece.charAt(0).toUpperCase() + piece.slice(1);
  }
  return title.trim();
}

function parseImports(str) {
  let parts = str.trim().split('\n');
  let names = [];
  for (let part of parts) {
    names.push(part.split('./')[1].replace(/';/g, '').trim());
  }
  return names;
}


function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
  } else {
    console.log(`\n${folderPath} already exists. Enter a new folder name.\n`);
    process.exit(0);
  }
}

function writeToFile(filePath, fileName, text) {
  fileName = path.join(filePath, fileName);
  fs.writeFile(fileName, text, function(err) {
    if(err) {
      return console.log(err);
    }
  });
}

function readFromFile(filePath, fileName) {
  fileName = path.join(filePath, fileName);
  return fs.readFileSync(fileName, 'utf8');
}

module.exports = {
  createFolder,
  getConfig,
  parseImports,
  readFromFile,
  writeToFile
}
