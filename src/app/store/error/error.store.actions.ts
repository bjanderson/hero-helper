import { PayloadAction } from '../../models';

export const ErrorActionTypes = {
  LOAD: '[Error] Load',
  LOAD_FAIL: '[Error] Load Fail',
  LOAD_SUCCESS: '[Error] Load Success',
};

export class LoadAction extends PayloadAction {
  constructor () { super(ErrorActionTypes.LOAD); }
}

export class LoadFailAction extends PayloadAction {
  constructor (payload: any) { super(ErrorActionTypes.LOAD_FAIL, payload); }
}

export class LoadSuccessAction extends PayloadAction {
  constructor (payload: any) { super(ErrorActionTypes.LOAD_SUCCESS, payload); }
}

export type ErrorAction = LoadAction |
  LoadFailAction |
  LoadSuccessAction;
