import { empty } from 'rxjs/observable/empty';

import { VillainEffects } from './villain.store.effects';

describe('VillainEffects', function () {
  let effects: VillainEffects;
  const actions$: any = empty();
  const villainService: any = { get: empty() };

  describe('constructor', function () {
    beforeEach(() => {
      effects = new VillainEffects(actions$, villainService);
    });

    it('has a function named ', function () {
      expect(effects).toBeDefined();
    });
  });

  describe('loadVillains()', function () {
    beforeEach(() => {
      effects = new VillainEffects(actions$, villainService);
    });

    it('has a function named loadVillains', function () {
      expect(typeof effects.loadVillains).toEqual('function');
    });
  });
});
