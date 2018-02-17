import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', function () {
  let component;

  describe('constructor()', function () {
    beforeEach(function () {
      component = new PageNotFoundComponent();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });

  describe('ngOnInit(): void', function () {
    beforeEach(function () {
      component = new PageNotFoundComponent();
    });

    it('has a function named ngOnInit', function () {
      expect(typeof component.ngOnInit).toEqual('function');
    });

    it('does nothing', function () {
      expect(component.ngOnInit()).toBeUndefined();
    });
  });
});
