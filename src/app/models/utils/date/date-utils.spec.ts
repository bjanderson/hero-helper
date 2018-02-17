import { DateUtils } from './date-utils'

describe('DateUtils', function () {

  describe('formatDate(date)', function () {
    it('returns "Invalid Date" for an invalid date', function () {
      const date = ''
      const expected = 'Invalid Date'
      const result = DateUtils.formatDate(date)
      expect(result).toEqual(expected)
    })

    it('returns a displayable date for a number', function () {
      const date = 1577941200000
      const expected = new Date(date).toLocaleDateString()
      const result = DateUtils.formatDate(date)
      expect(result).toEqual(expected)
    })
  })

  describe('getDate(date)', function () {
    it('returns a JavaScript Date if the input is a valid date', function () {
      const date = '1/2/2020'
      const expected = new Date(date).toString()
      const result = DateUtils.getDate(date).toString()
      expect(result).toEqual(expected)
    })

    it('returns an empty string if the input is not a valid date', function () {
      const date = '99/00/2020'
      const expected = ''
      const result = DateUtils.getDate(date)
      expect(result).toEqual(expected)
    })
  })

  describe('isValidDate(date)', function () {
    it('returns true when the date is a correct mmddyyyy string', function () {
      const date = '1/2/2020'
      const expected = true
      const result = DateUtils.isValidDate(date)
      expect(result).toEqual(expected)
    })

    it('returns true when the date is a Date', function () {
      const date = new Date()
      const expected = true
      const result = DateUtils.isValidDate(date)
      expect(result).toEqual(expected)
    })

    it('returns true when the date is null', function () {
      const date = null
      const expected = true
      const result = DateUtils.isValidDate(date)
      expect(result).toEqual(expected)
    })

    it('returns true when the date is a number', function () {
      const date = 1234
      const expected = true
      const result = DateUtils.isValidDate(date)
      expect(result).toEqual(expected)
    })

    it('returns false when the date is an empty string', function () {
      const date = ''
      const expected = false
      const result = DateUtils.isValidDate(date)
      expect(result).toEqual(expected)
    })

    it('returns false when the date is NaN', function () {
      const date = NaN
      const expected = false
      const result = DateUtils.isValidDate(date)
      expect(result).toEqual(expected)
    })

    it('returns false when the date is not correctly formatted', function () {
      const date = '20200201'
      const expected = false
      const result = DateUtils.isValidDate(date)
      expect(result).toEqual(expected)
    })

    it('returns false when the date is not a correct mmddyyyy date', function () {
      const date = '60/70/2020'
      const expected = false
      const result = DateUtils.isValidDate(date)
      expect(result).toEqual(expected)
    })
  })
})
