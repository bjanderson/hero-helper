import { PayloadAction } from '@practicalwebdev/utils';

export const VillainActionTypes = {
  LOAD: '[Villain] Load',
  LOAD_FAIL: '[Villain] Load Fail',
  LOAD_SUCCESS: '[Villain] Load Success',
};

export class LoadAction extends PayloadAction {
  constructor () { super(VillainActionTypes.LOAD); }
}

export class LoadFailAction extends PayloadAction {
  constructor (payload: any) { super(VillainActionTypes.LOAD_FAIL, payload); }
}

export class LoadSuccessAction extends PayloadAction {
  constructor (payload: any) { super(VillainActionTypes.LOAD_SUCCESS, payload); }
}

export type VillainAction = LoadAction |
  LoadFailAction |
  LoadSuccessAction;
