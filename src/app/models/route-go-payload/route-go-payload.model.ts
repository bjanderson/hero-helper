import { NavigationExtras } from '@angular/router';

import { Utils } from '../utils';

export class RouteGoPayload {

  extras?: NavigationExtras;
  path: any[];
  queryParams?: object;

  constructor(obj?: any) {
    obj = obj != null ? obj : {};
    this.extras = obj != null && obj.extras != null ? obj.extras : null;
    this.path = Utils.array.getArray(obj.path);
    this.queryParams = obj != null && obj.queryParams != null ? obj.queryParams : null;
  }
}
