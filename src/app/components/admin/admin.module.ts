import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

export const routes: Routes = [{
  path: '',
  component: AdminComponent
}];

@NgModule({
  declarations: [
    AdminComponent
  ],

  exports: [
    AdminComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule {}
