import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import { Book } from '../../models';
import { BookService } from '../../services';

import { BookActionTypes, LoadSuccessAction, LoadFailAction } from './book.store.actions';

@Injectable()
export class BookEffects {
  @Effect()
  loadBook$: Observable<Action> = this.actions$.pipe(
    ofType(BookActionTypes.LOAD),
    switchMap(() =>
      this.bookService.get()
        .pipe(
          map((books: Book[]) => new LoadSuccessAction(books)),
          catchError(error => of(new LoadFailAction(error)))
        )
    )
  );

  constructor(private actions$: Actions, private bookService: BookService) {}
}
