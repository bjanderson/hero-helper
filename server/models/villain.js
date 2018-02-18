import uuid from 'uuid/v4'

export class Villain {
  constructor(obj) {
    obj = obj != null ? obj : {}
    this.id = obj.id != null ? obj.id : uuid()
    this.name = obj.name != null ? obj.name : ''
  }
}
