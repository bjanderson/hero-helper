import { AppHeaderNavComponent } from './app-header-nav.component';

describe('AppHeaderNavComponent', function () {
  let component;

  function init() {
    component = new AppHeaderNavComponent();
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
