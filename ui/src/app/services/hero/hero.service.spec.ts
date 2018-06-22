import { empty } from 'rxjs';

import { HeroService } from './hero.service';

describe('HeroService', function () {
  let service: HeroService;
  const api: any = {
    delete: () => empty(),
    get: () => empty(),
    post: () => empty(),
    put: () => empty()
  };

  describe('constructor', function () {
    beforeEach(() => {
      service = new HeroService(api);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('create()', function () {
    beforeEach(() => {
      service = new HeroService(api);
    });

    it('has a function named create', function () {
      expect(typeof service.create).toEqual('function');
    });

    it('calls api.post() with the correct url and the given hero', function () {
      spyOn(api, 'post').and.returnValue(empty());
      const hero: any = {name: 'test-hero'};
      service.create(hero);
      expect(api.post).toHaveBeenCalledWith('/api/hero', hero);
    });
  });

  describe('delete', function () {
    beforeEach(() => {
      service = new HeroService(api);
    });

    it('has a function named delete', function () {
      expect(typeof service.delete).toEqual('function');
    });

    it('calls api.delete() with the correct url and the given id', function () {
      spyOn(api, 'delete').and.returnValue(empty());
      service.delete('test-id');
      expect(api.delete).toHaveBeenCalledWith('/api/hero/test-id');
    });
  });

  describe('get', function () {
    beforeEach(() => {
      service = new HeroService(api);
    });

    it('has a function named get', function () {
      expect(typeof service.get).toEqual('function');
    });

    it('calls api.get() with the correct url and the given id', function () {
      spyOn(api, 'get').and.returnValue(empty());
      service.get('test-id');
      expect(api.get).toHaveBeenCalledWith('/api/hero/test-id');
    });
  });

  describe('getAll()', function () {
    beforeEach(() => {
      service = new HeroService(api);
    });

    it('has a function named getAll', function () {
      expect(typeof service.getAll).toEqual('function');
    });

    it('calls api.get() with the correct url', function () {
      spyOn(api, 'get').and.returnValue(empty());
      service.getAll();
      expect(api.get).toHaveBeenCalledWith('/api/hero');
    });
  });

  describe('update()', function () {
    beforeEach(() => {
      service = new HeroService(api);
    });

    it('has a function named update', function () {
      expect(typeof service.update).toEqual('function');
    });

    it('calls api.put() with the correct url and the given hero', function () {
      spyOn(api, 'put').and.returnValue(empty());
      const hero: any = {name: 'test-hero'};
      service.update(hero);
      expect(api.put).toHaveBeenCalledWith('/api/hero', hero);
    });
  });
});
