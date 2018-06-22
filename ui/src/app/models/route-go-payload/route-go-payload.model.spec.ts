import { RouteGoPayload } from './route-go-payload.model';
import { NavigationExtras } from '@angular/router';

function testDefaults(obj: any) {
  expect(obj.extras).toBeNull();
  expect(obj.path).toEqual([]);
  expect(obj.queryParams).toBeNull();
}

describe('models', function () {
  describe('RouteGoPayload', function () {
    describe('constructor defaults', function () {
      it('should set the default values when no input object is given', function () {
        const obj = new RouteGoPayload();
        testDefaults(obj);
      });

      it('should set the default values when an empty input object is given', function () {
        const obj = new RouteGoPayload({});
        testDefaults(obj);
      });

      it('should set all fields as passed into the constructor object', function () {
        const obj = {
          path: ['test string 1'],
          queryParams: {test: 'test-param'}
        };

        const test = new RouteGoPayload(obj);

        for (const field of Object.keys(obj)) {
          expect(test[field]).toEqual(obj[field]);
        }
      });
    });

    describe('fields', function () {
      it('should have all of, and only, the expected fields', function () {
        const test = new RouteGoPayload();
        expect(Object.keys(test)).toEqual([
          'extras',
          'path',
          'queryParams'
        ]);
      });
    });
  });
});
