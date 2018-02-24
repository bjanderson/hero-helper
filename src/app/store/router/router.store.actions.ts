import { PayloadAction, RouteChangePayload, RouteGoPayload } from '../../models';

export const RouterActionTypes = {
  BACK: '[Router] Back',
  FORWARD: '[Router] Forward',
  GO: '[Router] Go',
  ROUTE_CHANGE: '[Router] Route Change'
};

export class BackAction extends PayloadAction {
  constructor() { super(RouterActionTypes.BACK); }
}

export class ForwardAction extends PayloadAction {
  constructor() { super(RouterActionTypes.FORWARD); }
}

export class GoAction extends PayloadAction {
  constructor(payload: RouteGoPayload) { super(RouterActionTypes.GO, payload); }
}

export class RouteChangeAction extends PayloadAction {
  constructor(payload: RouteChangePayload) { super(RouterActionTypes.ROUTE_CHANGE, payload); }
}

export type RouteAction =
  BackAction |
  ForwardAction |
  GoAction |
  RouteChangeAction;
