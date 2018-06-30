import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { ErrorStoreState } from '../../models';

import { AppStoreService } from '../app/app.store.service';

import { LoadAction } from './error.store.actions';
import { ErrorStoreModule } from './error.store.module';

@Injectable({
  providedIn: ErrorStoreModule
})
export class ErrorStoreService extends AppStoreService {
  errors = createFeatureSelector<ErrorStoreState>('errors');
  errorsSelector = createSelector(this.errors, this.getProperty('errors'));

  constructor(public store: Store<ErrorStoreState>) { super(); }

  getErrors() {
    return this.store.select(this.errorsSelector);
  }

  dispatchLoadAction(): void {
    this.dispatchAction(new LoadAction());
  }
}
