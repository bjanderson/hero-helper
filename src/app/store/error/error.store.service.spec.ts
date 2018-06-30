import { LoadAction } from './error.store.actions';
import { ErrorStoreService } from './error.store.service';

describe('ErrorStoreService', function () {
  let service: ErrorStoreService;
  const store: any = {select: () => undefined};

  function init() {
    service = new ErrorStoreService(store);
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('getErrors()', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named getErrors', function () {
      expect(typeof service.getErrors).toEqual('function');
    });

    it('calls store.select()', function () {
      spyOn(store, 'select').and.returnValue(null);
      service.getErrors();
      expect(store.select).toHaveBeenCalledWith(service.errorsSelector);
    });
  });

  describe('dispatchLoadAction()', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named dispatchLoadAction', function () {
      expect(typeof service.dispatchLoadAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      spyOn(service, 'dispatchAction').and.returnValue(null);
      service.dispatchLoadAction();
      expect(service.dispatchAction).toHaveBeenCalledWith(new LoadAction());
    });
  });
});
