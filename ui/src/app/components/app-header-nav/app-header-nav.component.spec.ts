import { AppHeaderNavComponent } from './app-header-nav.component';

describe('AppHeaderNavComponent', function () {
  let component;

  describe('constructor()', function () {
    beforeEach(function () {
      component = new AppHeaderNavComponent();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
