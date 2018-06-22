import { NavigationExtras } from '@angular/router';

import { getArray, getObject, getValueOrNull } from '../../utils';

export class RouteGoPayload {

  extras: NavigationExtras;
  path: any[];
  queryParams: object;

  constructor(obj?: any) {
    obj = getObject(obj);
    this.extras = obj != null && obj.extras != null ? obj.extras : null;
    this.path = getArray(obj.path);
    this.queryParams = getValueOrNull(obj.queryParams);
  }
}
