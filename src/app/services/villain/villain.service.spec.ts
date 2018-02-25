import { VillainService } from './villain.service';

describe('VillainService', function () {
  let service: VillainService;
  let api: any = {
    delete: () => undefined,
    get: () => undefined,
    post: () => undefined,
    put: () => undefined
  };

  describe('constructor', function () {
    beforeEach(() => {
      service = new VillainService(api);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('create()', function () {
    beforeEach(() => {
      service = new VillainService(api);
    });

    it('has a function named create', function () {
      expect(typeof service.create).toEqual('function');
    });

    it('calls api.post() with the correct url and the given villain', function () {
      spyOn(api, 'post').and.returnValue(null);
      const villain: any = {name: 'test-villain'};
      service.create(villain);
      expect(api.post).toHaveBeenCalledWith('/api/villain', villain);
    });
  });

  describe('delete', function () {
    beforeEach(() => {
      service = new VillainService(api);
    });

    it('has a function named delete', function () {
      expect(typeof service.delete).toEqual('function');
    });

    it('calls api.delete() with the correct url and the given id', function () {
      spyOn(api, 'delete').and.returnValue(null);
      service.delete('test-id');
      expect(api.delete).toHaveBeenCalledWith('/api/villain/test-id');
    });
  });

  describe('get', function () {
    beforeEach(() => {
      service = new VillainService(api);
    });

    it('has a function named get', function () {
      expect(typeof service.get).toEqual('function');
    });

    it('calls api.get() with the correct url and the given id', function () {
      spyOn(api, 'get').and.returnValue(null);
      service.get('test-id');
      expect(api.get).toHaveBeenCalledWith('/api/villain/test-id');
    });
  });

  describe('getAll()', function () {
    beforeEach(() => {
      service = new VillainService(api);
    });

    it('has a function named getAll', function () {
      expect(typeof service.getAll).toEqual('function');
    });

    it('calls api.get() with the correct url', function () {
      spyOn(api, 'get').and.returnValue(null);
      service.getAll();
      expect(api.get).toHaveBeenCalledWith('/api/villain');
    });
  });

  describe('update()', function () {
    beforeEach(() => {
      service = new VillainService(api);
    });

    it('has a function named update', function () {
      expect(typeof service.update).toEqual('function');
    });

    it('calls api.put() with the correct url and the given villain', function () {
      spyOn(api, 'put').and.returnValue(null);
      const villain: any = {name: 'test-villain'};
      service.update(villain);
      expect(api.put).toHaveBeenCalledWith('/api/villain', villain);
    });
  });
});
