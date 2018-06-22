import fs from 'fs';

import { dataFiles } from '../db';

import { getHeroes } from './heroes';
import { getVillains } from './villains';

/////////////////////////////////////

console.log('Generating data...');
generateHeroes();
generateVillains();
console.log('Done generating data.');

/////////////////////////////////////

function generateHeroes() {
  console.log(`  Generating heroes data...`)
  const data = {
    heroes: getHeroes()
  };
  writeToFile(dataFiles.hero, JSON.stringify(data, null, 2));
}

function generateVillains() {
  console.log(`  Generating villains data...`)
  const data = {
    villains: getVillains()
  };
  writeToFile(dataFiles.villain, JSON.stringify(data, null, 2));
}

function writeToFile(file, text) {
  console.log(`  Writing to ${file}`);
  fs.writeFileSync(file, text);
}
