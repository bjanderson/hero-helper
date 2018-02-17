import {
  BookActionTypes,

  LoadAction,
  LoadFailAction,
  LoadSuccessAction
} from './book.store.actions';

describe('bookActions', function () {
  describe('BookActionTypes', function () {
    it('has an action named LOAD', function () {
      expect(BookActionTypes.LOAD).toEqual('[Book] Load');
    });

    it('has an action named LOAD_FAIL', function () {
      expect(BookActionTypes.LOAD_FAIL).toEqual('[Book] Load Fail');
    });

    it('has an action named LOAD_SUCCESS', function () {
      expect(BookActionTypes.LOAD_SUCCESS).toEqual('[Book] Load Success');
    });
  });

  describe('LoadAction()', function () {
    it('sets action.type to LOAD', function () {
      const expected: any = '[Book] Load';
      const result: any = new LoadAction().type;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadFailAction()', function () {
    it('sets action.type to LOAD_FAIL', function () {
      const payload: any = 'test-payload';
      const expected: any = '[Book] Load Fail';
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
      const expected: any = '[Book] Load Success';
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
