import { HomeComponent } from './home.component';

describe('HomeComponent', function () {
  let component;

  describe('constructor()', function () {
    beforeEach(function () {
      component = new HomeComponent();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
