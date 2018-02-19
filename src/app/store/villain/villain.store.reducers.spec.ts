import { VillainStoreState } from '../../models';

import { LoadFailAction, LoadSuccessAction } from './villain.store.actions';
import { villainReducer } from './villain.store.reducers';

describe('villainReducer', function () {
  it('returns the given state by default', function () {
    const state = new VillainStoreState();
    const expected: any = state;
    const result: any = villainReducer(state, {type: 'test'} as any);
    expect(result).toEqual(expected);
  });

  it('returns the state with the error added', function () {
    const error = 'test error';
    const state = new VillainStoreState();
    const expected: any = new VillainStoreState({error});
    const result: any = villainReducer(state, new LoadFailAction(error));
    expect(result).toEqual(expected);
  });

  it('returns the state with the payload added', function () {
    const villains = ['villain-1', 'villain-2'];
    const state = new VillainStoreState();
    const expected: any = new VillainStoreState({villains});
    const result: any = villainReducer(state, new LoadSuccessAction(villains));
    expect(result).toEqual(expected);
  });
});
