import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { Hero } from '../../models';
import { HeroService } from '../../services';

import {
  HeroActionTypes,
  LoadFailAction,
  LoadSuccessAction
} from './hero.store.actions';

@Injectable()
export class HeroEffects {
  @Effect()
  loadHeroes$: Observable<Action> = this.actions$.pipe(
    ofType(HeroActionTypes.LOAD),
    switchMap(this.loadHeroes.bind(this)));

  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) {}

  loadHeroes() {
    return this.heroService.getAll().pipe(
      map((heroes: Hero[]) => new LoadSuccessAction(heroes)),
      catchError(error => of(new LoadFailAction(error))));
  }
}
