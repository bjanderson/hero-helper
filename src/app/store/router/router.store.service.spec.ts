import { RouterStoreService } from './router.store.service';

describe('RouterStoreService', function () {
  let service: RouterStoreService;
  const store: any = {
    select: () => undefined
  };

  function init() {
    service = new RouterStoreService(store);
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('getPath()', function () {
    beforeEach(() => {
      init();
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
      init();
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
      init();
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
      init();
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
      init();
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
