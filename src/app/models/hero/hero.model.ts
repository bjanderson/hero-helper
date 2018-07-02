import { getObject } from '@practicalwebdev/utils';

import { Being } from '../being';

export class Hero extends Being {

  constructor(obj?: any) {
    obj = getObject(obj);
    super(obj);
  }
}