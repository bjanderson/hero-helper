import { empty } from 'rxjs';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', function () {
  let component;
  const heroStoreService: any = { getHeroes: () => empty() };

  function init() {
    component = new HeroesComponent(heroStoreService);
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
