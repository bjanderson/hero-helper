import { defaultString } from '@practicalwebdev/utils';

import { RouteChangePayload } from './route-change-payload.model';

describe('RouteChangePayload', function () {
  describe('constructor defaults', function () {
    const defaults = {
      params: null,
      path: defaultString
    };

    it('should have the expected fields', function () {
      expect(Object.keys(defaults)).toEqual(Object.keys(new RouteChangePayload()));
    });

    it('should set the default values when given no input object', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new RouteChangePayload()));
    });

    it('should set the default values when given null', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new RouteChangePayload(null)));
    });
  });

  describe('constructor assignments', function () {
    it('should set all values passed into the constructor', function () {
      const test = {
        params: 'test params',
        path: 'test path'
      };

      expect(Object.values(test)).toEqual(Object.values(new RouteChangePayload(test)));
    });
  });
});
