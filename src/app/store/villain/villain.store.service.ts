import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { StoreService } from '@practicalwebdev/utils';

import { VillainStoreState } from '../../models';


import { LoadAction, LoadFailAction, LoadSuccessAction } from './villain.store.actions';

@Injectable()
export class VillainStoreService extends StoreService {
  villainStoreState = createFeatureSelector<VillainStoreState>('villains');
  villainsSelector = createSelector(this.villainStoreState, this.getProperty('villains'));

  constructor(public store: Store<VillainStoreState>) { super(); }

  getVillains() {
    return this.store.select(this.villainsSelector);
  }

  dispatchLoadAction() {
    this.dispatchAction(new LoadAction());
  }

  dispatchLoadFailAction(payload: string) {
    this.dispatchAction(new LoadFailAction(payload));
  }

  dispatchLoadSuccessAction(payload: string[]) {
    this.dispatchAction(new LoadSuccessAction(payload));
  }
}
