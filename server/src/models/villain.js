import { Being } from './being';

export class Villain extends Being {
  constructor(obj) {
    obj = obj != null ? obj : {};
    super(obj);
  }
}
