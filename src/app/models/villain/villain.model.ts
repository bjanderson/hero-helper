import { Being } from '../being';

export class Villain extends Being {

  constructor(obj?: any) {
    obj = obj != null ? obj : {};
    super(obj)
  }
}
