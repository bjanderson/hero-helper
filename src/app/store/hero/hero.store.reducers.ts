import { HeroStoreState } from '../../models';

import { HeroAction, HeroActionTypes } from './hero.store.actions';

export function heroReducer(state: HeroStoreState = new HeroStoreState(), action: HeroAction) {
  let newState: HeroStoreState;

  switch (action.type) {

    case HeroActionTypes.LOAD_FAIL:
      newState = new HeroStoreState(Object.assign({}, state, {error: action.payload}));
      return newState;

    case HeroActionTypes.LOAD_SUCCESS:
      newState = new HeroStoreState(Object.assign({}, state, {heroes: action.payload, error: ''}));
      return newState;

    case HeroActionTypes.LOAD:
    default:
      return state;
  }
}
