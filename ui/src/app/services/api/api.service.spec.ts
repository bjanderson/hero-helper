import { empty } from 'rxjs';

import { ApiService } from './api.service';

describe('ApiService', function () {
  let service: ApiService;
  const http: any = {
    delete: () => empty(),
    get: () => empty(),
    patch: () => empty(),
    post: () => empty(),
    put: () => empty()
  };

  describe('constructor()', function () {
    beforeEach(function () {
      service = new ApiService(http);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('delete(url: string, body: any, options: any = this.options): void', function () {
    beforeEach(function () {
      service = new ApiService(http);
    });

    it('has a function named delete', function () {
      expect(typeof service.delete).toEqual('function');
    });
  });

  describe('get(url: string, params?: any, options: any = this.options): void', function () {
    beforeEach(function () {
      service = new ApiService(http);
    });

    it('has a function named get', function () {
      expect(typeof service.get).toEqual('function');
    });
  });

  describe('patch(url: string, body: any, options: any = this.options): void', function () {
    beforeEach(function () {
      service = new ApiService(http);
    });

    it('has a function named patch', function () {
      expect(typeof service.patch).toEqual('function');
    });
  });

  describe('post(url: string, body: any, options: any = this.options): void', function () {
    beforeEach(function () {
      service = new ApiService(http);
    });

    it('has a function named post', function () {
      expect(typeof service.post).toEqual('function');
    });
  });

  describe('put(url: string, body: any, options: any = this.options): void', function () {
    beforeEach(function () {
      service = new ApiService(http);
    });

    it('has a function named put', function () {
      expect(typeof service.put).toEqual('function');
    });
  });

  describe('mapError<TResponse>(error: any): Observable<TResponse>', function () {
    beforeEach(function () {
      service = new ApiService(http);
      service.mapResponse = function () {};
    });

    it('calls the mapResponse function', function () {
      spyOn(service, 'mapResponse').and.returnValue(empty());
      service.mapError({});
      expect(service.mapResponse).toHaveBeenCalled();
    });
  });

  describe('mapResponse(response: any): any', function () {
    beforeEach(function () {
      service = new ApiService(http);
    });

    it('returns response.json() if possible', function () {
      const response = {a: 'a', json: function () { return 'test response'; }};
      const test = service.mapResponse(response);
      expect(test).toEqual('test response');
    });

    it('returns the given response if response.json() fails', function () {
      const response = {a: 'a', b: 'test response'};
      const test = service.mapResponse(response);
      expect(test).toEqual(response);
    });
  });
});
