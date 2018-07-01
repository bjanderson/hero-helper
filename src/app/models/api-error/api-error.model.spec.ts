import { defaultNumber } from '@practicalwebdev/utils';

import { ApiError } from './api-error.model';

describe('ApiError', function () {
  describe('constructor defaults', function () {
    const defaults = {
      errorMessage: 'An Error Occurred',
      status: defaultNumber
    };

    it('should have the expected fields', function () {
      expect(Object.keys(defaults)).toEqual(Object.keys(new ApiError()));
    });

    it('should set the default values when given no input object', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new ApiError()));
    });

    it('should set the default values when given null', function () {
      expect(Object.values(defaults)).toEqual(Object.values(new ApiError(null)));
    });
  });

  describe('constructor assignments', function () {
    it('should set all values passed into the constructor', function () {
      const test = {
        errorMessage: 'test errorMessage',
        status: 404
      };

      expect(Object.values(test)).toEqual(Object.values(new ApiError(test)));
    });
  });
});
