
import { ErrorEffects } from './error.store.effects';

describe('ErrorEffects', function () {
  let effects: any;

  function init() {
    effects = new ErrorEffects();
  }

  describe('constructor', function () {
    beforeEach(() => {
      init();
    });

    it('has a function named ', function () {
      expect(effects).toBeDefined();
    });
  });
});
