import { getArrayOfModels, getObject } from '@lernato/common';
import { Villain } from '../villain';


export class VillainStoreState {

  villains: Villain[];

  constructor(obj?: any) {
    obj = getObject(obj);
    this.villains = getArrayOfModels(Villain, obj.villains);
  }
}
