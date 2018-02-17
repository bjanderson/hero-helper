import { AdminComponent } from './admin.component';

describe('AdminComponent', function () {
  let component;

  describe('constructor()', function () {
    beforeEach(function () {
      component = new AdminComponent();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
