import { HerosComponent } from './heros.component';

describe('HerosComponent', function () {
  let component;

  describe('constructor()', function () {
    beforeEach(function () {
      component = new HerosComponent();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
