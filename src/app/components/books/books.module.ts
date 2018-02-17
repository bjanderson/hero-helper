import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BookStoreModule } from '../../store';

import { BooksComponent } from './books.component';

export const routes: Routes = [{
  path: '',
  component: BooksComponent
}];

@NgModule({
  declarations: [
    BooksComponent
  ],

  exports: [
    BooksComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    BookStoreModule,
    RouterModule.forChild(routes)
  ]
})
export class BooksModule {}
