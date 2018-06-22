import { SandboxComponent } from './sandbox.component';

describe('SandboxComponent', function () {
  let component;

  describe('constructor()', function () {
    beforeEach(function () {
      component = new SandboxComponent();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
