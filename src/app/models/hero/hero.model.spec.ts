import { defaultString } from '@practicalwebdev/utils';

import { Hero } from './hero.model';

describe('Hero', function () {
  describe('constructor defaults', function () {
    const defaults = {
      id: defaultString,
      name: defaultString
    };

    it('should have the expected fields', function () {
      expect(Object.keys(defaults)).toEqual(Object.keys(new Hero()));
    });

    it('should set the default values when given no input object', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new Hero()));
    });

    it('should set the default values when given null', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new Hero(null)));
    });
  });

  describe('constructor assignments', function () {
    it('should set all values passed into the constructor', function () {
      const test = {
        id: 'test id',
        name: 'test name'
      };

      expect(Object.values(test)).toEqual(Object.values(new Hero(test)));
    });
  });
});
