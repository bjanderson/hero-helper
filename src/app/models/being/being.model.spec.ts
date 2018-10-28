import { defaultString } from '@practicalwebdev/utils';

import { Being } from './being.model';

describe('Being', function () {
  describe('constructor defaults', function () {
    const defaults = {
      id: defaultString,
      name: defaultString
    };

    it('should have the expected fields', function () {
      expect(Object.keys(defaults)).toEqual(Object.keys(new Being()));
    });

    it('should set the default values when given no input object', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new Being()));
    });

    it('should set the default values when given null', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new Being(null)));
    });
  });

  describe('constructor assignments', function () {
    it('should set all values passed into the constructor', function () {
      const test = {
        id: 'test id',
        name: 'test name'
      };

      expect(Object.values(test)).toEqual(Object.values(new Being(test)));
    });
  });
});
