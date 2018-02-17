import { BookStoreState } from '../../models';

import { LoadFailAction, LoadSuccessAction } from './book.store.actions';
import { bookReducer } from './book.store.reducers';

describe('bookReducer', function () {
  it('returns the given state by default', function () {
    const state = new BookStoreState();
    const expected: any = state;
    const result: any = bookReducer(state, {type: 'test'} as any);
    expect(result).toEqual(expected);
  });

  it('returns the state with the error added', function () {
    const error = 'test error';
    const state = new BookStoreState();
    const expected: any = new BookStoreState({error});
    const result: any = bookReducer(state, new LoadFailAction(error));
    expect(result).toEqual(expected);
  });

  it('returns the state with the payload added', function () {
    const books = ['book-1', 'book-2'];
    const state = new BookStoreState();
    const expected: any = new BookStoreState({books});
    const result: any = bookReducer(state, new LoadSuccessAction(books));
    expect(result).toEqual(expected);
  });
});
