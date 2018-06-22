import { ApiError } from './api-error.model';

describe('ApiError', function () {
  describe('constructor defaults', function () {
    it('should set the default values when no input object is given', function () {
      const test = new ApiError();
      expect(test.errorMessage).toEqual('An Error Occurred');
    });

    it('should set the default values when an empty input object is given', function () {
      const test = new ApiError({});
      expect(test.errorMessage).toEqual('An Error Occurred');
    });

    it('should set all fields as passed into the constructor object', function () {
      const testObject = {
        errorMessage: 'test error message'
      };

      const test = new ApiError(testObject);

      for (const field of Object.keys(testObject)) {
        expect(test[field]).toEqual(testObject[field]);
      }
    });

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

  describe('fields', function () {
    it('should have all of, and only, the expected fields', function () {
      const test = new ApiError();
      expect(Object.keys(test)).toEqual([
        'errorMessage'
      ]);
    });
  });
});
