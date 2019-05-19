import { Injectable } from '@angular/core';
import { StoreService } from '@lernato/common-angular';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { HeroStoreState } from '../../models';
import { LoadAction, LoadFailAction, LoadSuccessAction } from './hero.store.actions';



@Injectable()
export class HeroStoreService extends StoreService {
  heroStoreState = createFeatureSelector<HeroStoreState>('heroes');
  heroesSelector = createSelector(this.heroStoreState, state => state.heroes);

  constructor(public store: Store<HeroStoreState>) { super(); }

  getHeroes() {
    return this.store.select(this.heroesSelector);
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
