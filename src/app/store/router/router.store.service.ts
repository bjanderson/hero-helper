import { Injectable } from '@angular/core';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { RouteChangePayload, RouteGoPayload } from '../../models';

import { AppState, AppStoreService } from '../app';

import { BackAction, ForwardAction, GoAction, RouteChangeAction } from './router.store.actions';

@Injectable()
export class RouterStoreService extends AppStoreService {
  router = createFeatureSelector<RouterReducerState>('router');
  routerSelector = createSelector(this.router, this.getState);
  routerPathSelector = createSelector(this.routerSelector, this.getProperty('url'));

  constructor(public store: Store<AppState>) { super(); }

  getPath() {
    return this.store.select(this.routerPathSelector);
  }

  dispatchBackAction() {
    this.dispatchAction(new BackAction());
  }

  dispatchForwardAction() {
    this.dispatchAction(new ForwardAction());
  }

  dispatchGoAction(payload: RouteGoPayload) {
    this.dispatchAction(new GoAction(payload));
  }

  dispatchRouteChangeAction(payload: RouteChangePayload) {
    this.dispatchAction(new RouteChangeAction(payload));
  }
}
