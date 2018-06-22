import { Being } from './being';

export class Hero extends Being {
  constructor(obj) {
    obj = obj != null ? obj : {};
    super(obj);
  }
}
