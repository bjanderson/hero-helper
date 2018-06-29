import { RouteChangePayload } from './route-change-payload.model';

function testDefaults(obj: any) {
  expect(obj.params).toBeNull();
  expect(obj.path).toEqual('');
}

describe('models', function () {
  describe('RouteChangePayload', function () {
    describe('constructor defaults', function () {
      it('should set the default values when no input object is given', function () {
        const obj = new RouteChangePayload();
        testDefaults(obj);
      });

      it('should set the default values when an empty input object is given', function () {
        const obj = new RouteChangePayload({});
        testDefaults(obj);
      });

      it('should set all fields as passed into the constructor object', function () {
        const obj = {
          params: {test: 'ok'},
          path: 'test string 1'
        };

        const test = new RouteChangePayload(obj);

        for (const field of Object.keys(obj)) {
          expect(test[field]).toEqual(obj[field]);
        }
      });
    });

    describe('fields', function () {
      it('should have all of, and only, the expected fields', function () {
        const test = new RouteChangePayload();
        expect(Object.keys(test)).toEqual([
          'params',
          'path'
        ]);
      });
    });
  });
});
