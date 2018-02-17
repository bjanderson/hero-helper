import { PermissionsService } from './permissions.service';

describe('PermissionsService', function () {
  let service;

  describe('initialization', function () {
    beforeEach(function () {
      service = new PermissionsService();
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('canAccessRoute(routeId: string): Observable<boolean>', function () {
    beforeEach(function () {
      service = new PermissionsService();
      service.isInitialized = function () { return true; };
      service.userHasRoutePermissions = function () {};
    });

    it('calls isInitialized()', function () {
      spyOn(service, 'isInitialized');
      service.canAccessRoute('test-route');
      expect(service.isInitialized).toHaveBeenCalled();
    });

    it('calls userHasRoutePermissions with the correct value', function () {
      spyOn(service, 'userHasRoutePermissions');
      service.canAccessRoute('test-route');
      expect(service.userHasRoutePermissions).toHaveBeenCalledWith('test-route');
    });
  });

  describe('isInitialized(): boolean', function () {
    beforeEach(function () {
      service = new PermissionsService();
    });

    it('returns false when approvedUserRoutes are null', function () {
      service.approvedUserRoutes = null;
      expect(service.isInitialized()).toEqual(false);
    });

    it('returns false when approvedUserRoutes are an empty array', function () {
      expect(service.isInitialized()).toEqual(false);
    });

    it('returns true when approvedUserRoutes.length > 0', function () {
      service.approvedUserRoutes = ['test'];
      expect(service.isInitialized()).toEqual(true);
    });
  });

  describe('userHasRoutePermissions(routeId: string): boolean', function () {
    beforeEach(function () {
      service = new PermissionsService();
    });

    it('returns false when the given route is not in the approvedUserRoutes', function () {
      expect(service.userHasRoutePermissions('test-route')).toEqual(false);
    });

    it('returns true when the given route is in the approvedUserRoutes', function () {
      service.approvedUserRoutes = ['test-route'];
      expect(service.userHasRoutePermissions('test-route')).toEqual(true);
    });
  });
});
