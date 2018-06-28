import { empty } from 'rxjs';

import { HeroEffects } from './hero.store.effects';

describe('HeroEffects', function () {
  let effects: HeroEffects;
  const actions$: any = empty();
  const heroService: any = { getAll: () => empty() };

  function init() {
    effects = new HeroEffects(actions$, heroService);
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named ', function () {
      expect(effects).toBeDefined();
    });
  });

  describe('loadHeroes()', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named loadHeroes', function () {
      expect(typeof effects.loadHeroes).toEqual('function');
    });

    it('calls heroService.getAll()', function () {
      spyOn(heroService, 'getAll').and.callThrough();
      effects.loadHeroes();
      expect(heroService.getAll).toHaveBeenCalled();
    });

    it('returns an observable', function () {
      const observable = effects.loadHeroes();
      const expected: any = 'function';
      const result: any = typeof observable.subscribe;
      expect(result).toEqual(expected);
    });
  });
});
