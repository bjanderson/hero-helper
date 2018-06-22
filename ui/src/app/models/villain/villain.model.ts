import { getObject } from '../../utils';

import { Being } from '../being';

export class Villain extends Being {

  constructor(obj?: any) {
    obj = getObject(obj);
    super(obj);
  }
}
