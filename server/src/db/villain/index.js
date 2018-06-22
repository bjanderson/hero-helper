import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

import { dataFiles } from '../data-files';

const adapter = new FileSync(dataFiles.villain);
const db = low(adapter);

export class VillainDb {

  static create(villain) {
    return db.get('villains')
      .push(villain)
      .write();
  }

  static delete(id) {
    return db.get('villains')
      .remove({ id })
      .write();
  }

  static get(id) {
    return db.get('villains')
      .find({ id })
      .value();
  }

  static getAll() {
    return db.get('villains')
      .value();
  }

  static update(villain) {
    return db.get('villains')
      .find({ id: villain.id })
      .assign(villain)
      .write();
  }
}
