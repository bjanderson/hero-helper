import { HeroStoreState } from '../../models';

import { LoadFailAction, LoadSuccessAction } from './hero.store.actions';
import { heroReducer } from './hero.store.reducers';

describe('heroReducer', function () {
  it('returns the given state by default', function () {
    const state = new HeroStoreState();
    const expected: any = state;
    const result: any = heroReducer(state, {type: 'test'} as any);
    expect(result).toEqual(expected);
  });

  it('returns the state with the error added', function () {
    const error = 'test error';
    const state = new HeroStoreState();
    const expected: any = new HeroStoreState({error});
    const result: any = heroReducer(state, new LoadFailAction(error));
    expect(result).toEqual(expected);
  });

  it('returns the state with the payload added', function () {
    const heroes = ['hero-1', 'hero-2'];
    const state = new HeroStoreState();
    const expected: any = new HeroStoreState({heroes});
    const result: any = heroReducer(state, new LoadSuccessAction(heroes));
    expect(result).toEqual(expected);
  });
});
