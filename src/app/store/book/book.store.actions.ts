import { PayloadAction } from '../../models';

export const BookActionTypes = {
  LOAD: '[Book] Load',
  LOAD_FAIL: '[Book] Load Fail',
  LOAD_SUCCESS: '[Book] Load Success',
};

export class LoadAction extends PayloadAction {
  constructor () { super(BookActionTypes.LOAD); }
}

export class LoadFailAction extends PayloadAction {
  constructor (payload: any) { super(BookActionTypes.LOAD_FAIL, payload); }
}

export class LoadSuccessAction extends PayloadAction {
  constructor (payload: any) { super(BookActionTypes.LOAD_SUCCESS, payload); }
}

export type BookAction = LoadAction |
  LoadFailAction |
  LoadSuccessAction;
