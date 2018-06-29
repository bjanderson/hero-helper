import {
  VillainActionTypes,

  LoadAction,
  LoadFailAction,
  LoadSuccessAction
} from './villain.store.actions';

describe('villainActions', function () {
  describe('VillainActionTypes', function () {
    it('has an action named LOAD', function () {
      expect(VillainActionTypes.LOAD).toEqual('[Villain] Load');
    });

    it('has an action named LOAD_FAIL', function () {
      expect(VillainActionTypes.LOAD_FAIL).toEqual('[Villain] Load Fail');
    });

    it('has an action named LOAD_SUCCESS', function () {
      expect(VillainActionTypes.LOAD_SUCCESS).toEqual('[Villain] Load Success');
    });
  });

  describe('LoadAction()', function () {
    it('sets action.type to LOAD', function () {
      const expected: any = '[Villain] Load';
      const result: any = new LoadAction().type;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadFailAction()', function () {
    it('sets action.type to LOAD_FAIL', function () {
      const payload: any = 'test-payload';
      const expected: any = '[Villain] Load Fail';
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
      const expected: any = '[Villain] Load Success';
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
