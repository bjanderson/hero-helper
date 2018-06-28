import { SandboxComponent } from './sandbox.component';

describe('SandboxComponent', function () {
  let component;

  function init() {
    component = new SandboxComponent();
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
