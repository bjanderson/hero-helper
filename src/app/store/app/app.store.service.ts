import { Action, Store } from '@ngrx/store';

export abstract class AppStoreService {
  store: Store<any>

  dispatchAction(action: Action) {
    return this.store.dispatch(action);
  }

  getProperty(prop: string) {
    return (obj: any = {}) => {
      return obj[prop];
    }
  }

  // doing this mainly to clean up unit test results
  getState(state: any) {
    return state;
  }
}
