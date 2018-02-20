import { Utils } from '../utils';

export class Being {

  id: string;
  name: string;

  constructor(obj?: any) {
    obj = obj != null ? obj : {};
    this.id = Utils.model.getString(obj.id);
    this.name = Utils.model.getString(obj.name);
  }
}
