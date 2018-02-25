import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import { Hero } from '../../models';
import { HeroService } from '../../services';

import { HeroActionTypes, LoadSuccessAction, LoadFailAction } from './hero.store.actions';

@Injectable()
export class HeroEffects {
  @Effect()
  loadHeroes$ = this.actions$.pipe(
    ofType(HeroActionTypes.LOAD),
    switchMap(this.loadHeroes.bind(this)));

  constructor(private actions$: Actions, private heroService: HeroService) {}

  loadHeroes() {
    this.heroService.getAll().pipe(
      map((heroes: Hero[]) => new LoadSuccessAction(heroes)),
      catchError(error => of(new LoadFailAction(error))));
  }
}
