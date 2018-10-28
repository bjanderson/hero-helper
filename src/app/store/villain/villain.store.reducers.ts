import { VillainStoreState } from '../../models';

import { VillainAction, VillainActionTypes } from './villain.store.actions';

export function villainReducer(state: VillainStoreState = new VillainStoreState(), action: VillainAction) {
  let newState: VillainStoreState;

  switch (action.type) {

    case VillainActionTypes.LOAD_FAIL:
      newState = new VillainStoreState(Object.assign({}, state, {error: action.payload}));
      return newState;

    case VillainActionTypes.LOAD_SUCCESS:
      newState = new VillainStoreState(Object.assign({}, state, {villains: action.payload, error: ''}));
      return newState;

    case VillainActionTypes.LOAD:
    default:
      return state;
  }
}
