import { getObject, getString } from '@lernato/common';

export class Being {

  id: string;
  name: string;

  constructor(obj?: any) {
    obj = getObject(obj);
    this.id = getString(obj.id);
    this.name = getString(obj.name);
  }
}
