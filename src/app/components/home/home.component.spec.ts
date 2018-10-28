import { HomeComponent } from './home.component';

describe('HomeComponent', function () {
  let component;

  function init() {
    component = new HomeComponent();
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
