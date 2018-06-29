import { defaultString, getArrayOfModels } from '@practicalwebdev/utils';
import { hasExpectedFieldsAndValues } from '../../utils/test';

import { Hero } from '../hero';

import { HeroStoreState } from './hero-store-state.model';

describe('HeroStoreState', function () {
  describe('constructor defaults', function () {
    const defaults = {
      heroes: []
    };

    it('should set the default values when given no input object', function () {
      expect(new HeroStoreState()).toEqual(defaults);
      // expect(hasExpectedFieldsAndValues(defaults, new HeroStoreState())).toEqual(true);
    });

    it('should set the default values when given null', function () {
      expect(new HeroStoreState(null)).toEqual(defaults);
      // expect(hasExpectedFieldsAndValues(defaults, new HeroStoreState())).toEqual(true);
    });
  });

  describe('constructor assignments', function () {
    it('should set all fields as passed into the constructor object', function () {
      const testInput = {
        heroes: [{name: 'test hero 1'}, {name: 'test hero 2'}]
      };

      const test = {
        heroes: getArrayOfModels(Hero, testInput.heroes)
      };

      expect(new HeroStoreState(testInput)).toEqual(test);
    });
  });
});
