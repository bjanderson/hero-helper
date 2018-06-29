import { defaultString } from '@practicalwebdev/utils';
import { hasExpectedFieldsAndValues } from '../../utils/test';

import { Hero } from './hero.model';

describe('Hero', function () {
  describe('constructor defaults', function () {
    const defaults = {
      id: defaultString,
      name: defaultString
    };

    it('should set the default values when given no input object', function () {
      expect(hasExpectedFieldsAndValues(defaults, new Hero())).toEqual(true);
    });

    it('should set the default values when given null', function () {
      expect(hasExpectedFieldsAndValues(defaults, new Hero())).toEqual(true);
    });
  });

  describe('constructor assignments', function () {
    it('should set all fields as passed into the constructor object', function () {
      const test = {
        id: 'test id',
        name: 'test name'
      };

      expect(hasExpectedFieldsAndValues(test, new Hero(test))).toEqual(true);
    });
  });
});
