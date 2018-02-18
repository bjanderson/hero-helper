import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'

const dbFile = path.resolve('server/data/hero-db.json')
const adapter = new FileSync(dbFile)
const db = lowdb(adapter)

export class HeroDb {

  static create(hero) {
    return db.get('heros')
      .push(hero)
      .write()
  }

  static delete(id) {
    return db.get('heros')
      .remove({ id })
      .write()
  }

  static get(id) {
    return db.get('heros')
      .find({ id })
      .value()
  }

  static getAll() {
    return db.get('heros')
      .value()
  }

  static update(hero) {
    return db.get('heros')
      .find({ id: hero.id })
      .assign(hero)
      .write()
  }
}
