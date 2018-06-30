import { ErrorStoreState } from '../../models';

import { LoadSuccessAction } from './error.store.actions';
import { errorReducer } from './error.store.reducers';

describe('errorReducer', function () {
  it('returns the given state by default', function () {
    const state = new ErrorStoreState();
    const expected: any = state;
    const result: any = errorReducer(state, <any>{type: 'default'});
    expect(result).toEqual(expected);
  });

  it('returns the state with the payload added', function () {
    const value = 'error-1';
    const state = new ErrorStoreState();
    const expected: any = new ErrorStoreState({value});
    const result: any = errorReducer(state, new LoadSuccessAction(value));
    expect(result).toEqual(expected);
  });
});
