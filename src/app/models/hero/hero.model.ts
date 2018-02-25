import { Being } from '../being';

export class Hero extends Being {

  constructor(obj?: any) {
    obj = obj != null ? obj : {};
    super(obj);
  }
}
