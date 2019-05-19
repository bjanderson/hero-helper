import { getArrayOfModels } from '@lernato/common';
import { Villain } from '../villain';
import { VillainStoreState } from './villain-store-state.model';



describe('VillainStoreState', function () {
  describe('constructor defaults', function () {
    const defaults = {
      villains: []
    };

    it('should have the expected fields', function () {
      expect(Object.keys(defaults)).toEqual(Object.keys(new VillainStoreState()));
    });

    it('should set the default values when given no input object', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new VillainStoreState()));
    });

    it('should set the default values when given null', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new VillainStoreState(null)));
    });
  });

  describe('constructor assignments', function () {
    it('should set all values passed into the constructor', function () {
      const test = {
        villains: getArrayOfModels(Villain, [{id: 1}, {id: 2}])
      };

      expect(Object.values(test)).toEqual(Object.values(new VillainStoreState(test)));
    });
  });
});
