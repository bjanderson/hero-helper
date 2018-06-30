import {
  ErrorActionTypes,

  LoadAction,
  LoadFailAction,
  LoadSuccessAction
} from './error.store.actions';

describe('errorActions', function () {
  describe('ErrorActionTypes', function () {
    it('has an action named LOAD', function () {
      expect(ErrorActionTypes.LOAD).toEqual('[Error] Load');
    });

    it('has an action named LOAD_FAIL', function () {
      expect(ErrorActionTypes.LOAD_FAIL).toEqual('[Error] Load Fail');
    });

    it('has an action named LOAD_SUCCESS', function () {
      expect(ErrorActionTypes.LOAD_SUCCESS).toEqual('[Error] Load Success');
    });
  });

  describe('LoadAction()', function () {
    it('sets action.type to LOAD', function () {
      const expected: any = '[Error] Load';
      const result: any = new LoadAction().type;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadFailAction()', function () {
    it('sets action.type to LOAD_FAIL', function () {
      const payload: any = 'test-payload';
      const expected: any = '[Error] Load Fail';
      const result: any = new LoadFailAction(payload).type;
      expect(result).toEqual(expected);
    });

    it('sets action.payload to the given payload', function () {
      const payload: any = 'test-payload';
      const expected: any = payload;
      const result: any = new LoadFailAction(payload).payload;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadSuccessAction()', function () {
    it('sets action.type to LOAD_SUCCESS', function () {
      const payload: any = 'test-payload';
      const expected: any = '[Error] Load Success';
      const result: any = new LoadSuccessAction(payload).type;
      expect(result).toEqual(expected);
    });

    it('sets action.payload to the given payload', function () {
      const payload: any = 'test-payload';
      const expected: any = payload;
      const result: any = new LoadSuccessAction(payload).payload;
      expect(result).toEqual(expected);
    });
  });
});
