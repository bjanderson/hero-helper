import { LoadAction, LoadFailAction, LoadSuccessAction } from './book.store.actions';
import { BookStoreService } from './book.store.service';

describe('BookStoreService', function () {
  let service: BookStoreService;
  let store: any = {select: () => undefined};

  describe('constructor', function () {
    beforeEach(() => {
      service = new BookStoreService(store);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('getState()', function () {
    beforeEach(() => {
      service = new BookStoreService(store);
    });

    it('has a function named getState', function () {
      expect(typeof service.getState).toEqual('function');
    });

    it('calls store.select()', function () {
      spyOn(store, 'select').and.returnValue(null);
      service.getState();
      expect(store.select).toHaveBeenCalledWith(service.stateSelector);
    });
  });

  describe('getBooks()', function () {
    beforeEach(() => {
      service = new BookStoreService(store);
    });

    it('has a function named getBooks', function () {
      expect(typeof service.getBooks).toEqual('function');
    });

    it('calls store.select()', function () {
      spyOn(store, 'select').and.returnValue(null);
      service.getBooks();
      expect(store.select).toHaveBeenCalledWith(service.booksSelector);
    });
  });

  describe('dispatchLoadAction()', function () {
    beforeEach(() => {
      service = new BookStoreService(store);
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
      service = new BookStoreService(store);
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
      service = new BookStoreService(store);
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
