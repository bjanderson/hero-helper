import { Villain } from '../villain';

import { VillainStoreState } from './villain-store-state.model';

function testDefaults(obj: any) {
  expect(obj.villains).toEqual([]);
}

describe('models', function () {
  describe('VillainStoreState', function () {
    describe('constructor defaults', function () {
      it('should set the default values when no input object is given', function () {
        let obj = new VillainStoreState();
        testDefaults(obj);
      });

      it('should set the default values when an empty input object is given', function () {
        let obj = new VillainStoreState({});
        testDefaults(obj);
      });

      it('should set all fields as passed into the constructor object', function () {
        let obj = {
          villains: [{name: 'test villain'}]
        };

        let expected = {
          villains: [new Villain(obj[0])]
        }

        let test = new VillainStoreState(obj);

        for (let field of Object.keys(obj)) {
          expect(test[field]).toEqual(expected[field]);
        }
      });
    });

    describe('fields', function () {
      it('should have all of, and only, the expected fields', function () {
        let test = new VillainStoreState();
        expect(Object.keys(test)).toEqual([
          'villains'
        ]);
      });
    });
  });
});
