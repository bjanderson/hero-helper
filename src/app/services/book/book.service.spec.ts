import { BookService } from './book.service';

describe('BookService', function () {
  let service: BookService;
  let api: any = { get: () => undefined };

  describe('constructor', function () {
    beforeEach(() => {
      service = new BookService(api);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('get', function () {
    beforeEach(() => {
      service = new BookService(api);
    });

    it('has a function named get', function () {
      expect(typeof service.get).toEqual('function');
    });

    it('calls api.get()', function () {
      spyOn(api, 'get').and.returnValue(null);
      service.get();
      expect(api.get).toHaveBeenCalled();
    });
  });
});
