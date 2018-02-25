import { empty } from 'rxjs/observable/empty';

import { HeroEffects } from './hero.store.effects';

describe('HeroEffects', function () {
  let effects: HeroEffects;
  const actions$: any = empty();
  const heroService: any = { get: empty() };

  describe('constructor', function () {
    beforeEach(() => {
      effects = new HeroEffects(actions$, heroService);
    });

    it('has a function named ', function () {
      expect(effects).toBeDefined();
    });
  });

  describe('loadHeroes()', function () {
    beforeEach(() => {
      effects = new HeroEffects(actions$, heroService);
    });

    it('has a function named loadHeroes', function () {
      expect(typeof effects.loadHeroes).toEqual('function');
    });
  });
});
