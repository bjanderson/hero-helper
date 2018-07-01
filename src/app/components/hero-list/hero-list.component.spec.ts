import { HeroListComponent } from './hero-list.component';

describe('HeroListComponent', function () {
  let component;

  function init() {
    component = new HeroListComponent();
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
