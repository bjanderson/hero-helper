import { empty } from 'rxjs/observable/empty';

import { VillainsComponent } from './villains.component';

describe('VillainsComponent', function () {
  let component;
  const villainStoreService: any = { getVillains: () => empty() };

  describe('constructor()', function () {
    beforeEach(function () {
      component = new VillainsComponent(villainStoreService);
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
