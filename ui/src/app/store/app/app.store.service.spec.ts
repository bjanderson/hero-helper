import { AppStoreService } from './app.store.service';

class TestStoreService extends AppStoreService {
  constructor(public store: any) { super(); }
}

describe('AppStoreService', function () {
  let service: AppStoreService;
  const store: any = { dispatch: () => undefined };

  function init() {
    service = new TestStoreService(store);
  }

  describe('dispatchAction(action: Action)', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named dispatchAction', function () {
      expect(typeof service.dispatchAction).toEqual('function');
    });

    it('calls store.dispatch() with the given action', function () {
      spyOn(store, 'dispatch').and.returnValue(null);
      const action: any = 'test-action';
      service.dispatchAction(action);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('getProperty(prop: string)', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named getProperty', function () {
      expect(typeof service.getProperty).toEqual('function');
    });

    it('returns a function', function () {
      const f = service.getProperty('test');
      const expected: any = 'function';
      const result: any = typeof f;
      expect(result).toEqual(expected);
    });

    it('returns the value of obj[prop]', function () {
      const obj = {test: 'test-value'};
      const f = service.getProperty('test');
      const expected: any = 'test-value';
      const result: any = f(obj);
      expect(result).toEqual(expected);
    });
  });

  describe('getState(state: any)', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named getState', function () {
      expect(typeof service.getState).toEqual('function');
    });

    it('returns the given object', function () {
      const state: any = {test: 'test-value'};
      const expected: any = state;
      const result: any = service.getState(state);
      expect(result).toEqual(expected);
    });
  });
});
