import { VillainService } from './villain.service';

describe('VillainService', function () {
  let service: VillainService;
  let api: any = { get: () => undefined };

  describe('constructor', function () {
    beforeEach(() => {
      service = new VillainService(api);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('get', function () {
    beforeEach(() => {
      service = new VillainService(api);
    });

    it('has a function named get', function () {
      expect(typeof service.get).toEqual('function');
    });

    it('calls api.get()', function () {
      spyOn(api, 'get').and.returnValue(null);
      service.get('test-id');
      expect(api.get).toHaveBeenCalled();
    });
  });
});
