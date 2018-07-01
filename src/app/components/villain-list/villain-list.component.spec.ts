import { VillainListComponent } from './villain-list.component';

describe('VillainListComponent', function () {
  let component;

  function init() {
    component = new VillainListComponent();
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
