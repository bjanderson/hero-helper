import { BooksComponent } from './books.component';

describe('BooksComponent', function () {
  let component;
  let bookStoreService: any = {dispatchLoadAction: () => undefined};

  describe('constructor()', function () {
    beforeEach(function () {
      component = new BooksComponent(bookStoreService);
    });

    it('should create the component', function () {
      expect(component).toBeDefined();
    });
  });
});
