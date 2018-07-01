import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  declarations: [
    HomeComponent
  ],

  exports: [
    HomeComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {}
