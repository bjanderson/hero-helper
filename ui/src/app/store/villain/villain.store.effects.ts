import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { Villain } from '../../models';
import { VillainService } from '../../services';

import {
  LoadFailAction,
  LoadSuccessAction,
  VillainActionTypes
} from './villain.store.actions';

@Injectable()
export class VillainEffects {
  @Effect()
  loadVillains$: Observable<Action> = this.actions$.pipe(
    ofType(VillainActionTypes.LOAD),
    switchMap(this.loadVillains.bind(this))
  );

  constructor(
    private actions$: Actions,
    private villainService: VillainService
  ) {}

  loadVillains() {
    return this.villainService.getAll().pipe(
      map((villains: Villain[]) => new LoadSuccessAction(villains)),
      catchError(error => of(new LoadFailAction(error))));
  }
}
