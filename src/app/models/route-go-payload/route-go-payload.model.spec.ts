import { RouteGoPayload } from './route-go-payload.model';

describe('RouteGoPayload', function () {
  describe('constructor defaults', function () {
    const defaults = {
      extras: null,
      path: [],
      queryParams: null
    };

    it('should have the expected fields', function () {
      expect(Object.keys(defaults)).toEqual(Object.keys(new RouteGoPayload()));
    });

    it('should set the default values when given no input object', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new RouteGoPayload()));
    });

    it('should set the default values when given null', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new RouteGoPayload(null)));
    });
  });

  describe('constructor assignments', function () {
    it('should set all values passed into the constructor', function () {
      const test = {
        extras: 'test extras',
        path: ['test path'],
        queryParams: 'test queryParams',
      };

      expect(Object.values(test)).toEqual(Object.values(new RouteGoPayload(test)));
    });
  });
});
