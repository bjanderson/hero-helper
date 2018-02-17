import { NgModule } from '@angular/core';
  import { EffectsModule } from '@ngrx/effects';
  import { StoreModule } from '@ngrx/store';

  import { BookService } from '../../services';

  import { BookEffects } from './book.store.effects';
  import { bookReducer } from './book.store.reducers';
  import { BookStoreService } from './book.store.service';

  @NgModule({
    exports: [
      EffectsModule,
      StoreModule
    ],

    imports: [
      StoreModule.forFeature('books', bookReducer),
      EffectsModule.forFeature([BookEffects])
    ],

    providers: [
      BookService,
      BookStoreService
    ]
  })
  export class BookStoreModule {}
