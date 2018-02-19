import { empty } from 'rxjs/observable/empty';

import { VillainEffects } from './villain.store.effects';

describe('VillainEffects', function () {
  let effects: VillainEffects;
  let actions$: any = empty();
  let villainService: any = { get: empty() };

  describe('constructor', function () {
    beforeEach(() => {
      effects = new VillainEffects(actions$, villainService);
    });

    it('has a function named ', function () {
      expect(effects).toBeDefined();
    });
  });
});
