import { Villain } from '../villain';
import { Utils } from '../utils';

export class VillainStoreState {

  villains: Villain[];

  constructor(obj?: any) {
    obj = obj != null ? obj : {};
    this.villains = Utils.array.getArrayOfModels(Villain, obj.villains);
  }
}
