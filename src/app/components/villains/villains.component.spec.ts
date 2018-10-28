import { empty } from 'rxjs';

import { VillainsComponent } from './villains.component';

describe('VillainsComponent', function () {
  let component;
  const villainStoreService: any = { getVillains: () => empty() };

  function init() {
    component = new VillainsComponent(villainStoreService);
  }

  describe('constructor()', function () {
    beforeEach(function () {
      init();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
