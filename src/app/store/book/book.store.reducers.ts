import { BookStoreState } from '../../models';

import { BookAction, BookActionTypes } from './book.store.actions';

export function bookReducer(state: BookStoreState = new BookStoreState(), action: BookAction) {
  let newState: BookStoreState;

  switch(action.type) {

    case BookActionTypes.LOAD_FAIL:
      newState = new BookStoreState(Object.assign({}, state, {error: action.payload}));
      return newState;

    case BookActionTypes.LOAD_SUCCESS:
      newState = new BookStoreState(Object.assign({}, state, {books: action.payload}));
      return newState;

    case BookActionTypes.LOAD:
    default:
      return state;
  }
}
