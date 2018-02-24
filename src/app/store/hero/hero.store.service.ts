import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { HeroStoreState } from '../../models';

import { AppStoreService } from '../app/app.store.service';

import { LoadAction, LoadFailAction, LoadSuccessAction } from './hero.store.actions';

@Injectable()
export class HeroStoreService extends AppStoreService {
  heroes = createFeatureSelector<HeroStoreState>('heroes');
  heroesSelector = createSelector(this.heroes, this.getProperty('heroes'));

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
