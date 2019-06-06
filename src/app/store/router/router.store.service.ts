import { Injectable } from '@angular/core';
import { AppState, Route, StoreService } from '@lernato/common-angular';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { BackAction, ForwardAction, GoAction, RouteChangeAction } from './router.store.actions';

@Injectable()
export class RouterStoreService extends StoreService {
  routerReducerState = createFeatureSelector<RouterReducerState>('router');
  routerPathSelector = createSelector(this.routerReducerState, state => state['url']);

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

  dispatchGoAction(payload: Route) {
    this.dispatchAction(new GoAction(payload));
  }

  dispatchRouteChangeAction(payload: Route) {
    this.dispatchAction(new RouteChangeAction(payload));
  }
}
