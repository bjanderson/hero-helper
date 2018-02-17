import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { PermissionsService } from '../permissions';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private permissions: PermissionsService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.permissions.canAccessRoute(route.url[0].path);
  }
}
