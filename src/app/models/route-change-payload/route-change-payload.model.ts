import { Utils } from '../utils';

export class RouteChangePayload {

  params: any;
  path: string;

  constructor(obj?: any) {
    obj = obj != null ? obj : {};
    this.params = obj != null && obj.params != null ? obj.params : null;
    this.path = Utils.model.getString(obj.path);
  }
}
