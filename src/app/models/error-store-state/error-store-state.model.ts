import { getObject, getString } from '@practicalwebdev/utils';

export class ErrorStoreState {

  value: string;

  constructor(obj?: Partial<ErrorStoreState>) {
    obj = getObject(obj);
    this.value = getString(obj.value);
  }
}
