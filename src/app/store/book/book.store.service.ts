import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { BookStoreState } from '../../models';

import { AppStoreService } from '../app/app.store.service';

import { LoadAction, LoadFailAction, LoadSuccessAction } from './book.store.actions';

@Injectable()
export class BookStoreService extends AppStoreService {
  books = createFeatureSelector<BookStoreState>('books');
  stateSelector = createSelector(this.books, this.getState);
  booksSelector = createSelector(this.books, this.getProperty('books'));

  constructor(public store: Store<BookStoreState>) { super(); }

  getState() {
    return this.store.select(this.stateSelector);
  }

  getBooks() {
    return this.store.select(this.booksSelector);
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
