import {
  getArray,
  getArrayOfBooleans,
  getArrayOfModels,
  getArrayOfNumbers,
  getArrayOfStrings
} from './array.utils';

class TestModel {
  test: string;
  x: string;

  constructor() {
    this.test = 'test';
    this.x = 'test';
  }
}

describe('ArrayUtils', function () {

  describe('getArray(objs)', function () {
    it('returns an empty array when objs is undefined', function () {
      const objs = undefined;
      const result = getArray(objs);
      const expected = [];
      expect(result).toEqual(expected);
    });

    it('returns an empty array when objs is null', function () {
      const objs = null;
      const result = getArray(objs);
      const expected = [];
      expect(result).toEqual(expected);
    });

    it('returns an array of strings objs is a string', function () {
      const objs = 'test';
      const result = getArray(objs);
      const expected = ['test'];
      expect(result).toEqual(expected);
    });

    it('returns objs when it is an array', function () {
      const objs = ['test'];
      const result = getArray(objs);
      const expected = ['test'];
      expect(result).toEqual(expected);
    });
  });

  describe('getArrayOfModels(clazz, objs)', function () {
    it('returns an empty array when objs is undefined', function () {
      const objs = undefined;
      const result = getArrayOfModels(TestModel, objs);
      const expected = [];
      expect(result).toEqual(expected);
    });

    it('returns an empty array when objs is null', function () {
      const objs = null;
      const result = getArrayOfModels(TestModel, objs);
      const expected = [];
      expect(result).toEqual(expected);
    });

    it('returns an array of models when objs is a single model', function () {
      const objs = new TestModel();
      const result = getArrayOfModels(TestModel, objs);
      const expected = [new TestModel()];
      expect(result).toEqual(expected);
    });

    it('returns an array of models when objs is an array of models', function () {
      const objs = [new TestModel()];
      const result = getArrayOfModels(TestModel, objs);
      const expected = [new TestModel()];
      expect(result).toEqual(expected);
    });

    it('returns an empty array when objs is not of the given model type', function () {
      const objs = [{name: 'name'}];
      const result = getArrayOfModels(TestModel, objs);
      const expected = [];
      expect(result).toEqual(expected);
    });
  });
});
