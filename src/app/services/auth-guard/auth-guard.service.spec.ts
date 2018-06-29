
import { AuthGuardService } from './auth-guard.service';
import { PermissionsService } from '../permissions';

describe('AuthGuardService', function () {
  let service;
  const permissions: any = {
    canAccessRoute: () => undefined
  };

  function init() {
    service = new AuthGuardService(permissions);
  }

  describe('initialization', function () {
    beforeEach(function () {
      init();
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>', function () {
    beforeEach(function () {
      init();
    });

    it('calls permissions.canAccessRoute()', function () {
      spyOn(permissions, 'canAccessRoute');
      service.canActivate({url: [{path: 'test-route'}]});
      expect(permissions.canAccessRoute).toHaveBeenCalledWith('test-route');
    });
  });
});
