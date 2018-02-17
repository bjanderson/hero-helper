import { Book } from './book.model';

function testDefaults(obj: any) {
  expect(obj.id).toEqual(0);
  expect(obj.title).toEqual('');
}

describe('models', function () {
  describe('Book', function () {
    describe('constructor defaults', function () {
      it('should set the default values when no input object is given', function () {
        let obj = new Book();
        testDefaults(obj);
      });

      it('should set the default values when an empty input object is given', function () {
        let obj = new Book({});
        testDefaults(obj);
      });

      it('should set all fields as passed into the constructor object', function () {
        let obj = {
          id: 1,
          title: 'test string 1'
        };

        let test = new Book(obj);

        for (let field of Object.keys(obj)) {
          expect(test[field]).toEqual(obj[field]);
        }
      });
    });

    describe('fields', function () {
      it('should have all of, and only, the expected fields', function () {
        let test = new Book();
        expect(Object.keys(test)).toEqual([
          'id',
          'title'
        ]);
      });
    });
  });
});
