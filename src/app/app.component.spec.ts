import { AppComponent } from './app.component';

describe('AppComponent', function () {
  let component: AppComponent;

  describe('constructor', function () {
    beforeEach(() => {
      component = new AppComponent();
    });

    it('constructs', function () {
      expect(component).toBeDefined();
    });
  });
});
