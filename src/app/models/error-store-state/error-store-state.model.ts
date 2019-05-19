import { getObject, getString } from '@lernato/common';

export class ErrorStoreState {

  value: string;

  constructor(obj?: Partial<ErrorStoreState>) {
    obj = getObject(obj);
    this.value = getString(obj.value);
  }
}
