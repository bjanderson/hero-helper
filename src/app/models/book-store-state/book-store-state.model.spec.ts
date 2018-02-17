import { ApiError } from '../api-error';
import { Book } from '../book';

import { BookStoreState } from './book-store-state.model';

function testDefaults(obj: any) {
  expect(obj.books).toEqual([]);
  expect(obj.error).toBeNull();
}

describe('models', function () {
  describe('BookStoreState', function () {
    describe('constructor defaults', function () {
      it('should set the default values when no input object is given', function () {
        let obj = new BookStoreState();
        testDefaults(obj);
      });

      it('should set the default values when an empty input object is given', function () {
        let obj = new BookStoreState({});
        testDefaults(obj);
      });

      it('should set all fields as passed into the constructor object', function () {
        let obj = {
          books: [{title: 'test string 1'}],
          error: {errorMessage: 'test error'}
        };

        let expected = {
          books: [new Book({title: 'test string 1'})],
          error: new ApiError({errorMessage: 'test error'})
        };

        let test = new BookStoreState(obj);

        for (let field of Object.keys(obj)) {
          expect(test[field]).toEqual(expected[field]);
        }
      });
    });

    describe('fields', function () {
      it('should have all of, and only, the expected fields', function () {
        let test = new BookStoreState();
        expect(Object.keys(test)).toEqual([
          'books',
          'error'
        ]);
      });
    });
  });
});
