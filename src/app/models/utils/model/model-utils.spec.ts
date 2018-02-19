import { Being } from '../../being'

import { ModelUtils } from './model-utils'

describe('ModelUtils', function () {

  describe('hasPropertyOf(clazz, obj)', function () {
    it('returns false when clazz is undefined', function () {
      const obj = {}
      const expected = false
      const result = ModelUtils.hasPropertyOf(null, obj)
      expect(result).toEqual(expected)
    })

    it('returns false when obj is undefined', function () {
      const obj = null
      const expected = false
      const result = ModelUtils.hasPropertyOf(Being, obj)
      expect(result).toEqual(expected)
    })

    it('returns false when obj does not have any properties in common with clazz', function () {
      const obj = {test: 'test'}
      const expected = false
      const result = ModelUtils.hasPropertyOf(Being, obj)
      expect(result).toEqual(expected)
    })

    it('returns true when obj has properties in common with clazz', function () {
      const obj = {name: 'test'}
      const expected = true
      const result = ModelUtils.hasPropertyOf(Being, obj)
      expect(result).toEqual(expected)
    })

    it('returns true when obj is an instance of clazz', function () {
      const obj = new Being()
      const expected = true
      const result = ModelUtils.hasPropertyOf(Being, obj)
      expect(result).toEqual(expected)
    })
  })

  describe('isInstanceOf(clazz, obj)', function () {
    it('returns false when clazz is undefined', function () {
      const obj = {}
      const expected = false
      const result = ModelUtils.isInstanceOf(null, obj)
      expect(result).toEqual(expected)
    })

    it('returns false when obj is undefined', function () {
      const obj = null
      const expected = false
      const result = ModelUtils.isInstanceOf(Being, obj)
      expect(result).toEqual(expected)
    })

    it('returns false when obj does not have any properties in common with clazz', function () {
      const obj = {test: 'test'}
      const expected = false
      const result = ModelUtils.isInstanceOf(Being, obj)
      expect(result).toEqual(expected)
    })

    it('returns false when obj does not have all properties in common with clazz', function () {
      const obj = {name: 'test'}
      const expected = false
      const result = ModelUtils.isInstanceOf(Being, obj)
      expect(result).toEqual(expected)
    })

    it('returns true when obj is an instance of clazz', function () {
      const obj = new Being()
      const expected = true
      const result = ModelUtils.isInstanceOf(Being, obj)
      expect(result).toEqual(expected)
    })
  })
})
