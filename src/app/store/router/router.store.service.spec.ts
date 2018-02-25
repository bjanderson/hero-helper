import {
  BackAction,
  ForwardAction,
  GoAction,
  RouteChangeAction
} from './router.store.actions';
import { RouterStoreService } from './router.store.service';

describe('RouterStoreService', function () {
  let service: RouterStoreService;
  let store: any = {
    select: () => undefined
  };

  describe('constructor', function () {
    beforeEach(() => {
      service = new RouterStoreService(store);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('getPath()', function () {
    beforeEach(() => {
      service = new RouterStoreService(store);
    });

    it('has a function named getPath', function () {
      expect(typeof service.getPath).toEqual('function');
    });

    it('calls store.select() with the routerPathSelector', function () {
      spyOn(store, 'select').and.returnValue(null);
      service.getPath();
      expect(store.select).toHaveBeenCalledWith(service.routerPathSelector);
    });
  });

  describe('dispatchBackAction()', function () {
    beforeEach(() => {
      service = new RouterStoreService(store);
      service.dispatchAction = () => undefined;
    });

    it('has a function named dispatchBackAction', function () {
      expect(typeof service.dispatchBackAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      spyOn(service, 'dispatchAction').and.returnValue(null);
      service.dispatchBackAction();
      expect(service.dispatchAction).toHaveBeenCalled();
    });
  });

  describe('dispatchForwardAction()', function () {
    beforeEach(() => {
      service = new RouterStoreService(store);
      service.dispatchAction = () => undefined;
    });

    it('has a function named dispatchForwardAction', function () {
      expect(typeof service.dispatchForwardAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      spyOn(service, 'dispatchAction').and.returnValue(null);
      service.dispatchForwardAction();
      expect(service.dispatchAction).toHaveBeenCalled();
    });
  });

  describe('dispatchGoAction()', function () {
    beforeEach(() => {
      service = new RouterStoreService(store);
      service.dispatchAction = () => undefined;
    });

    it('has a function named dispatchGoAction', function () {
      expect(typeof service.dispatchGoAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      spyOn(service, 'dispatchAction').and.returnValue(null);
      service.dispatchGoAction({} as any);
      expect(service.dispatchAction).toHaveBeenCalled();
    });
  });

  describe('dispatchRouteChangeAction()', function () {
    beforeEach(() => {
      service = new RouterStoreService(store);
      service.dispatchAction = () => undefined;
    });

    it('has a function named dispatchRouteChangeAction', function () {
      expect(typeof service.dispatchRouteChangeAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      spyOn(service, 'dispatchAction').and.returnValue(null);
      service.dispatchRouteChangeAction({} as any);
      expect(service.dispatchAction).toHaveBeenCalled();
    });
  });
});
