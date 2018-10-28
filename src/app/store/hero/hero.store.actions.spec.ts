import {
  HeroActionTypes,

  LoadAction,
  LoadFailAction,
  LoadSuccessAction
} from './hero.store.actions';

describe('heroActions', function () {
  describe('HeroActionTypes', function () {
    it('has an action named LOAD', function () {
      expect(HeroActionTypes.LOAD).toEqual('[Hero] Load');
    });

    it('has an action named LOAD_FAIL', function () {
      expect(HeroActionTypes.LOAD_FAIL).toEqual('[Hero] Load Fail');
    });

    it('has an action named LOAD_SUCCESS', function () {
      expect(HeroActionTypes.LOAD_SUCCESS).toEqual('[Hero] Load Success');
    });
  });

  describe('LoadAction()', function () {
    it('sets action.type to LOAD', function () {
      const expected: any = '[Hero] Load';
      const result: any = new LoadAction().type;
      expect(result).toEqual(expected);
    });
  });

  describe('LoadFailAction()', function () {
    it('sets action.type to LOAD_FAIL', function () {
      const payload: any = 'test-payload';
      const expected: any = '[Hero] Load Fail';
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
      const expected: any = '[Hero] Load Success';
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
