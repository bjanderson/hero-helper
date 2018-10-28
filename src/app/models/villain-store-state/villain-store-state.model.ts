import { getArrayOfModels, getObject } from '@practicalwebdev/utils';

import { Villain } from '../villain';

export class VillainStoreState {

  villains: Villain[];

  constructor(obj?: any) {
    obj = getObject(obj);
    this.villains = getArrayOfModels(Villain, obj.villains);
  }
}
