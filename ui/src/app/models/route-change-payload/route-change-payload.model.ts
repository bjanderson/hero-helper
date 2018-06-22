import { getObject, getString, getValueOrNull } from '../../utils';

export class RouteChangePayload {

  params: any;
  path: string;

  constructor(obj?: any) {
    obj = getObject(obj);
    this.params = getValueOrNull(obj.params);
    this.path = getString(obj.path);
  }
}
