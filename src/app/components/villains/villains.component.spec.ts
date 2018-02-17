import { VillainsComponent } from './villains.component';

describe('VillainsComponent', function () {
  let component;

  describe('constructor()', function () {
    beforeEach(function () {
      component = new VillainsComponent();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
