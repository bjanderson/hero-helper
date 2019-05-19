import { defaultString } from '@lernato/common';
import { ErrorStoreState } from './error-store-state.model';


describe('ErrorStoreState', function () {
  describe('constructor defaults', function () {
    const defaults = {
      value: defaultString
    };

    it('should have the expected fields', function () {
      expect(Object.keys(defaults)).toEqual(Object.keys(new ErrorStoreState()));
    });

    it('should set the default values when given no input object', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new ErrorStoreState()));
    });

    it('should set the default values when given null', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new ErrorStoreState(null)));
    });
  });

  describe('constructor assignments', function () {
    it('should set all values passed into the constructor', function () {
      const test = {
        value: 'test value'
      };

      expect(Object.values(test)).toEqual(Object.values(new ErrorStoreState(test)));
    });
  });
});
