import { Injectable } from '@angular/core';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { AppState, AppStoreService } from '../app';

@Injectable()
export class RouterStoreService extends AppStoreService {
  router = createFeatureSelector<RouterReducerState>('router');
  routerSelector = createSelector(this.router, this.getState);
  routerPathSelector = createSelector(this.routerSelector, this.getProperty('url'));

  constructor(public store: Store<AppState>) { super(); }

  getPath() {
    return this.store.select(this.routerPathSelector);
  }
}
