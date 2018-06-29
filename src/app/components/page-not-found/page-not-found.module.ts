import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [{
  path: '',
  component: PageNotFoundComponent
}];

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],

  exports: [
    PageNotFoundComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PageNotFoundModule {}
