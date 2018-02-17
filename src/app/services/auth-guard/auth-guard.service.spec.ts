
import { AuthGuardService } from './auth-guard.service';
import { PermissionsService } from '../permissions';

describe('AuthGuardService', function () {
  let permissions;
  let service;

  describe('initialization', function () {
    beforeEach(function () {
      permissions = <PermissionsService>{};
      service = new AuthGuardService(permissions);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>', function () {
    beforeEach(function () {
      permissions = <PermissionsService>{};
      permissions.canAccessRoute = function () {};
      service = new AuthGuardService(permissions);
    });

    it('calls permissions.canAccessRoute()', function () {
      spyOn(permissions, 'canAccessRoute');
      service.canActivate({url: [{path: 'test-route'}]});
      expect(permissions.canAccessRoute).toHaveBeenCalledWith('test-route');
    });
  });
});
