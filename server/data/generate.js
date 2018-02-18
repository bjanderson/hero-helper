import fs from 'fs'
import path from 'path'

import { getHeros } from './heros'
import { getVillains } from './villains'

const heroDbFile = path.resolve('server/data/hero-db.json')
const villainDbFile = path.resolve('server/data/villain-db.json')

/////////////////////////////////////

console.log('Generating data...')
generateHeros()
generateVillains()
console.log('Done generating data.')

/////////////////////////////////////

function generateHeros() {
  console.log(`  Generating heros data...`)
  const data = {
    heros: getHeros()
  }
  writeToFile(heroDbFile, JSON.stringify(data, null, 2))
}

function generateVillains() {
  console.log(`  Generating villains data...`)
  const data = {
    villains: getVillains()
  }
  writeToFile(villainDbFile, JSON.stringify(data, null, 2))
}

function writeToFile(file, text) {
  console.log(`  Writing to ${file}`)
  fs.writeFileSync(file, text)
}
