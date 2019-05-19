import { getObject } from '@lernato/common';
import { Being } from '../being';


export class Hero extends Being {

  constructor(obj?: any) {
    obj = getObject(obj);
    super(obj);
  }
}
