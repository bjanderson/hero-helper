import { Book } from '../../book'

import { ArrayUtils } from './array-utils'

describe('ArrayUtils', function () {

  describe('getArray(objs)', function () {
    it('returns an empty array when objs is undefined', function () {
      let objs;
      const result = ArrayUtils.getArray(objs)
      const expected = []
      expect(result).toEqual(expected)
    })

    it('returns an empty array when objs is null', function () {
      const objs = null
      const result = ArrayUtils.getArray(objs)
      const expected = []
      expect(result).toEqual(expected)
    })

    it('returns an array of strings objs is a string', function () {
      const objs = 'test'
      const result = ArrayUtils.getArray(objs)
      const expected = ['test']
      expect(result).toEqual(expected)
    })

    it('returns objs when it is an array', function () {
      const objs = ['test']
      const result = ArrayUtils.getArray(objs)
      const expected = ['test']
      expect(result).toEqual(expected)
    })
  })

  describe('getArrayOfModels(clazz, objs)', function () {
    it('returns an empty array when objs is undefined', function () {
      let objs;
      const result = ArrayUtils.getArrayOfModels(Book, objs)
      const expected = []
      expect(result).toEqual(expected)
    })

    it('returns an empty array when objs is null', function () {
      const objs = null
      const result = ArrayUtils.getArrayOfModels(Book, objs)
      const expected = []
      expect(result).toEqual(expected)
    })

    it('returns an array of models when objs is a single model', function () {
      const objs = new Book()
      const result = ArrayUtils.getArrayOfModels(Book, objs)
      const expected = [new Book()]
      expect(result).toEqual(expected)
    })

    it('returns an array of models when objs is an array of models', function () {
      const objs = [new Book()]
      const result = ArrayUtils.getArrayOfModels(Book, objs)
      const expected = [new Book()]
      expect(result).toEqual(expected)
    })

    it('returns an empty array when objs is not of the given model type', function () {
      const objs = [{test: 'test'}]
      const result = ArrayUtils.getArrayOfModels(Book, objs)
      const expected = []
      expect(result).toEqual(expected)
    })
  })
})
