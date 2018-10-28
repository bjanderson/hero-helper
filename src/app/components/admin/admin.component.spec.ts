import { AdminComponent } from './admin.component';

describe('AdminComponent', function () {
  let component;

  function init() {
    component = new AdminComponent();
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
