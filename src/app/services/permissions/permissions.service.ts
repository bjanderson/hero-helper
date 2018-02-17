import { Injectable } from '@angular/core';

@Injectable()
export class PermissionsService {

  approvedUserRoutes: string[];

  constructor() {
    this.approvedUserRoutes = [];
  }

  canAccessRoute(routeId: string): boolean {
    return this.isInitialized() &&
      this.userHasRoutePermissions(routeId);
  }

  private isInitialized(): boolean {
    return this.approvedUserRoutes != null && this.approvedUserRoutes.length > 0;
  }

  private userHasRoutePermissions(routeId: string): boolean {
    return this.approvedUserRoutes.indexOf(routeId) > -1;
  }
}
