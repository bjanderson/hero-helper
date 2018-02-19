import { Villain } from './villain.model';

function testDefaults(obj: any) {
  expect(obj.id).toEqual('');
  expect(obj.name).toEqual('');
}

describe('models', function () {
  describe('Villain', function () {
    describe('constructor defaults', function () {
      it('should set the default values when no input object is given', function () {
        let obj = new Villain();
        testDefaults(obj);
      });

      it('should set the default values when an empty input object is given', function () {
        let obj = new Villain({});
        testDefaults(obj);
      });

      it('should set all fields as passed into the constructor object', function () {
        let obj = {
          id: 'test string 1',
          name: 'test string 2'
        };

        let test = new Villain(obj);

        for (let field of Object.keys(obj)) {
          expect(test[field]).toEqual(obj[field]);
        }
      });
    });

    describe('fields', function () {
      it('should have all of, and only, the expected fields', function () {
        let test = new Villain();
        expect(Object.keys(test)).toEqual([
          'id',
          'name'
        ]);
      });
    });
  });
});
