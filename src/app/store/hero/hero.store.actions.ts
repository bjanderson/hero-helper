import { PayloadAction } from '@practicalwebdev/utils';

export const HeroActionTypes = {
  LOAD: '[Hero] Load',
  LOAD_FAIL: '[Hero] Load Fail',
  LOAD_SUCCESS: '[Hero] Load Success',
};

export class LoadAction extends PayloadAction {
  constructor () { super(HeroActionTypes.LOAD); }
}

export class LoadFailAction extends PayloadAction {
  constructor (payload: any) { super(HeroActionTypes.LOAD_FAIL, payload); }
}

export class LoadSuccessAction extends PayloadAction {
  constructor (payload: any) { super(HeroActionTypes.LOAD_SUCCESS, payload); }
}

export type HeroAction = LoadAction |
  LoadFailAction |
  LoadSuccessAction;
