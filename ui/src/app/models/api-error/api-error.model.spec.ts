import { hasExpectedFieldsAndValues } from '../../utils/test';

import { ApiError } from './api-error.model';

describe('ApiError', function () {
  describe('constructor defaults', function () {
    const defaults = {
      errorMessage: 'An Error Occurred'
    };

    it('should set the default values when given no input object', function () {
      expect(hasExpectedFieldsAndValues(defaults, new ApiError())).toEqual(true);
    });

    it('should set the default values when given null', function () {
      expect(hasExpectedFieldsAndValues(defaults, new ApiError())).toEqual(true);
    });
  });

  describe('constructor assignments', function () {
    it('should set the errorMessage to the passed in string', function () {
      const test = new ApiError('test error');
      expect(test.errorMessage).toEqual('test error');
    });

    it('should set the errorMessage to the message of the passed in Error', function () {
      const test = new ApiError(new Error('test error'));
      expect(test.errorMessage).toEqual('test error');
    });

    it('should set the errorMessage to the errorMessage of the passed in object', function () {
      const test = new ApiError({errorMessage: 'test error'});
      expect(test.errorMessage).toEqual('test error');
    });
  });
});
