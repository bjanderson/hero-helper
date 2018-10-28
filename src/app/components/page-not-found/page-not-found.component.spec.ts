import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', function () {
  let component;

  function init() {
    component = new PageNotFoundComponent();
  }

  describe('constructor()', function () {
    beforeEach(function () {
      init();
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });

  describe('ngOnInit(): void', function () {
    beforeEach(function () {
      init();
    });

    it('has a function named ngOnInit', function () {
      expect(typeof component.ngOnInit).toEqual('function');
    });

    it('does nothing', function () {
      expect(component.ngOnInit()).toBeUndefined();
    });
  });
});
