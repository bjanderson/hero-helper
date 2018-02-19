import { empty } from 'rxjs/observable/empty';

import { HeroEffects } from './hero.store.effects';

describe('HeroEffects', function () {
  let effects: HeroEffects;
  let actions$: any = empty();
  let heroService: any = { get: empty() };

  describe('constructor', function () {
    beforeEach(() => {
      effects = new HeroEffects(actions$, heroService);
    });

    it('has a function named ', function () {
      expect(effects).toBeDefined();
    });
  });
});
