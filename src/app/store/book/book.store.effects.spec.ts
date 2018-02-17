import { empty } from 'rxjs/observable/empty';

import { BookEffects } from './book.store.effects';

describe('BookEffects', function () {
  let effects: BookEffects;
  let actions$: any = empty();
  let bookService: any = { get: empty() };

  describe('constructor', function () {
    beforeEach(() => {
      effects = new BookEffects(actions$, bookService);
    });

    it('has a function named ', function () {
      expect(effects).toBeDefined();
    });
  });
});
