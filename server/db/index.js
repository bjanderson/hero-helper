const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')

const dbFile = path.resolve('server/data/db.json')
const adapter = new FileSync(dbFile)
const db = low(adapter)

function init() {
  // Set some defaults (required if your JSON file is empty)
  db.defaults({ heros: [], user: {}, count: 0 })
    .write()

  // Add a hero
  db.get('heros')
    .push({ id: 1, name: 'Batman'})
    .write()

  // Set a user using Lodash shorthand syntax
  db.set('user.name', 'The Boss')
    .write()

  // Increment count
  db.update('count', n => n + 1)
    .write()
}

// init()

function getHero(id) {
  return db.get('heros')
    .find({ id: parseInt(id) })
    .value()
}

module.exports = {
  getHero
}
