import { hasPropertyOf, isInstanceOf } from './model.utils';

class TestModel {
  test: string;
  x: string;

  constructor() {
    this.test = 'test';
    this.x = 'test';
  }
}

describe('Model Utils', function () {

  describe('hasPropertyOf(clazz, obj)', function () {
    it('has a function named hasPropertyOf', function () {
      expect(typeof hasPropertyOf).toEqual('function');
    });

    it('returns false when clazz is undefined', function () {
      const obj = {};
      const expected = false;
      const result = hasPropertyOf(null, obj);
      expect(result).toEqual(expected);
    });

    it('returns false when obj is undefined', function () {
      const obj = null;
      const expected = false;
      const result = hasPropertyOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns false when obj does not have any properties in common with clazz', function () {
      const obj = {name: 'name'};
      const expected = false;
      const result = hasPropertyOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns true when obj has properties in common with clazz', function () {
      const obj = {test: 'test'};
      const expected = true;
      const result = hasPropertyOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns true when obj is an instance of clazz', function () {
      const obj = new TestModel();
      const expected = true;
      const result = hasPropertyOf(TestModel, obj);
      expect(result).toEqual(expected);
    });
  });

  describe('isInstanceOf(clazz, obj)', function () {
    it('has a function named isInstanceOf', function () {
      expect(typeof isInstanceOf).toEqual('function');
    });

    it('returns false when clazz is undefined', function () {
      const obj = {};
      const expected = false;
      const result = isInstanceOf(null, obj);
      expect(result).toEqual(expected);
    });

    it('returns false when obj is undefined', function () {
      const obj = null;
      const expected = false;
      const result = isInstanceOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns false when obj does not have any properties in common with clazz', function () {
      const obj = {name: 'name'};
      const expected = false;
      const result = isInstanceOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns false when obj does not have all properties in common with clazz', function () {
      const obj = {test: 'test'};
      const expected = false;
      const result = isInstanceOf(TestModel, obj);
      expect(result).toEqual(expected);
    });

    it('returns true when obj is an instance of clazz', function () {
      const obj = new TestModel();
      const expected = true;
      const result = isInstanceOf(TestModel, obj);
      expect(result).toEqual(expected);
    });
  });
});
