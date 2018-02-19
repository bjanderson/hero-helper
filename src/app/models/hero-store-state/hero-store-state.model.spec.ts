import { Hero } from '../hero';

import { HeroStoreState } from './hero-store-state.model';

function testDefaults(obj: any) {
  expect(obj.heroes).toEqual([]);
}

describe('models', function () {
  describe('HeroStoreState', function () {
    describe('constructor defaults', function () {
      it('should set the default values when no input object is given', function () {
        let obj = new HeroStoreState();
        testDefaults(obj);
      });

      it('should set the default values when an empty input object is given', function () {
        let obj = new HeroStoreState({});
        testDefaults(obj);
      });

      it('should set all fields as passed into the constructor object', function () {
        let obj = {
          heroes: [{name: 'test hero'}]
        };

        let expected = {
          heroes: [new Hero(obj.heroes[0])]
        }

        let test = new HeroStoreState(obj);

        for (let field of Object.keys(obj)) {
          expect(test[field]).toEqual(expected[field]);
        }
      });
    });

    describe('fields', function () {
      it('should have all of, and only, the expected fields', function () {
        let test = new HeroStoreState();
        expect(Object.keys(test)).toEqual([
          'heroes'
        ]);
      });
    });
  });
});
