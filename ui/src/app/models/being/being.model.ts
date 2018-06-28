import { getObject, getString } from '@practicalwebdev/utils';

export class Being {

  id: string;
  name: string;

  constructor(obj?: any) {
    obj = getObject(obj);
    this.id = getString(obj.id);
    this.name = getString(obj.name);
  }
}
