import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule {}
