import { getArrayOfModels } from '@practicalwebdev/utils';

import { Hero } from '../hero';

import { HeroStoreState } from './hero-store-state.model';

describe('HeroStoreState', function () {
  describe('constructor defaults', function () {
    const defaults = {
      heroes: []
    };

    it('should have the expected fields', function () {
      expect(Object.keys(defaults)).toEqual(Object.keys(new HeroStoreState()));
    });

    it('should set the default values when given no input object', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new HeroStoreState()));
    });

    it('should set the default values when given null', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new HeroStoreState(null)));
    });
  });

  describe('constructor assignments', function () {
    it('should set all values passed into the constructor', function () {
      const test = {
        heroes: getArrayOfModels(Hero, [{id: 1}, {id: 2}])
      };

      expect(Object.values(test)).toEqual(Object.values(new HeroStoreState(test)));
    });
  });
});
