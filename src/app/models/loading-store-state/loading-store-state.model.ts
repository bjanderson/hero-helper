import { getObject, getString } from '@practicalwebdev/utils';

export class LoadingStoreState {

  value: string;

  constructor(obj?: Partial<LoadingStoreState>) {
    obj = getObject(obj);
    this.value = getString(obj.value);
  }
}
