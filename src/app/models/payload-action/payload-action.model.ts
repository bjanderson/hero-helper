import { Action } from '@ngrx/store';

export class PayloadAction implements Action {
  constructor(public type: string, public payload?: any) {}
}
