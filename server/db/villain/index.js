const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')

const dbFile = path.resolve('server/data/villain-db.json')
const adapter = new FileSync(dbFile)
const db = low(adapter)

function init() {
  // Set some defaults (required if your JSON file is empty)
  db.defaults({ villains: [], vilainCount: 0 })
    .write()

  // Add a villain
  db.get('villains')
    .push({ id: 1, name: 'Joker'})
    .write()

  // Increment count
  db.update('vilainCount', n => n + 1)
    .write()
}

// init()

function get(id) {
  return db.get('villains')
    .find({ id: parseInt(id) })
    .value()
}

module.exports = {
  get
}
