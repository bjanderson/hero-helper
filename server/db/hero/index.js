import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'

import { dataFiles } from '../'

const adapter = new FileSync(dataFiles.hero)
const db = lowdb(adapter)

export class HeroDb {

  static create(hero) {
    return db.get('heroes')
      .push(hero)
      .write()
  }

  static delete(id) {
    return db.get('heroes')
      .remove({ id })
      .write()
  }

  static get(id) {
    return db.get('heroes')
      .find({ id })
      .value()
  }

  static getAll() {
    return db.get('heroes')
      .value()
  }

  static update(hero) {
    return db.get('heroes')
      .find({ id: hero.id })
      .assign(hero)
      .write()
  }
}
