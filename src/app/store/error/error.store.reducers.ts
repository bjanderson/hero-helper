import { ErrorStoreState } from '../../models';

import { ErrorAction, ErrorActionTypes } from './error.store.actions';

export function errorReducer(state: ErrorStoreState = new ErrorStoreState(), action: ErrorAction): ErrorStoreState {

  switch (action.type) {

    case ErrorActionTypes.LOAD_SUCCESS:
      return loadSuccess(state, action.payload);

    default:
      return state;
  }
}

function loadSuccess(state: ErrorStoreState, payload: any) {
  state.value = payload;
  return new ErrorStoreState(state);
}
