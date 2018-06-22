import { empty } from 'rxjs';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', function () {
  let component;
  const heroStoreService: any = { getHeroes: () => empty() };

  describe('constructor()', function () {
    beforeEach(function () {
      component = new HeroesComponent(heroStoreService);
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
