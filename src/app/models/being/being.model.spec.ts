import { Being } from './being.model';

function testDefaults(obj: any) {
  expect(obj.id).toEqual('');
  expect(obj.name).toEqual('');
}

describe('models', function () {
  describe('Being', function () {
    describe('constructor defaults', function () {
      it('should set the default values when no input object is given', function () {
        const obj = new Being();
        testDefaults(obj);
      });

      it('should set the default values when an empty input object is given', function () {
        const obj = new Being({});
        testDefaults(obj);
      });

      it('should set all fields as passed into the constructor object', function () {
        const obj = {
          id: 'test string 1',
          name: 'test string 2'
        };

        const test = new Being(obj);

        for (const field of Object.keys(obj)) {
          expect(test[field]).toEqual(obj[field]);
        }
      });
    });

    describe('fields', function () {
      it('should have all of, and only, the expected fields', function () {
        const test = new Being();
        expect(Object.keys(test)).toEqual([
          'id',
          'name'
        ]);
      });
    });
  });
});
