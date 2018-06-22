import { LoadAction, LoadFailAction, LoadSuccessAction } from './villain.store.actions';
import { VillainStoreService } from './villain.store.service';

describe('VillainStoreService', function () {
  let service: VillainStoreService;
  const store: any = {select: () => undefined};

  describe('constructor', function () {
    beforeEach(() => {
      service = new VillainStoreService(store);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('getVillains()', function () {
    beforeEach(() => {
      service = new VillainStoreService(store);
    });

    it('has a function named getVillains', function () {
      expect(typeof service.getVillains).toEqual('function');
    });

    it('calls store.select()', function () {
      spyOn(store, 'select').and.returnValue(null);
      service.getVillains();
      expect(store.select).toHaveBeenCalledWith(service.villainsSelector);
    });
  });

  describe('dispatchLoadAction()', function () {
    beforeEach(() => {
      service = new VillainStoreService(store);
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

  describe('dispatchLoadFailAction(payload: string)', function () {
    beforeEach(() => {
      service = new VillainStoreService(store);
    });

    it('has a function named dispatchLoadFailAction', function () {
      expect(typeof service.dispatchLoadFailAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      spyOn(service, 'dispatchAction').and.returnValue(null);
      const payload = 'test error';
      service.dispatchLoadFailAction(payload);
      expect(service.dispatchAction).toHaveBeenCalledWith(new LoadFailAction(payload));
    });
  });

  describe('dispatchLoadSuccessAction(payload: string)', function () {
    beforeEach(() => {
      service = new VillainStoreService(store);
    });

    it('has a function named dispatchLoadSuccessAction', function () {
      expect(typeof service.dispatchLoadSuccessAction).toEqual('function');
    });

    it('calls dispatchAction()', function () {
      spyOn(service, 'dispatchAction').and.returnValue(null);
      const payload = ['test payload'];
      service.dispatchLoadSuccessAction(payload);
      expect(service.dispatchAction).toHaveBeenCalledWith(new LoadSuccessAction(payload));
    });
  });
});
