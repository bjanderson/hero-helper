import { NavigationExtras } from '@angular/router';

import { getArray, getObject, getValueOrNull } from '@practicalwebdev/utils';

export class RouteGoPayload {

  extras: NavigationExtras;
  path: any[];
  queryParams: object;

  constructor(obj?: any) {
    obj = getObject(obj);
    this.extras = getValueOrNull(obj.extras);
    this.path = getArray(obj.path);
    this.queryParams = getValueOrNull(obj.queryParams);
  }
}
