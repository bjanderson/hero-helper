import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',

  children: [

    // ----- DEFAULT ----- //
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
    },

    // ----- BOOKS ----- //
    {
      path: 'books',
      loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], require => {
          resolve(require('../books/books.module').BooksModule);
        });
      })
    },

    // ----- HOME ----- //
    {
      path: 'home',
      loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], require => {
          resolve(require('../home/home.module').HomeModule);
        });
      })
    },

    // ----- SANDBOX ----- //
    {
      path: 'sandbox',
      loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], require => {
          resolve(require('../sandbox/sandbox.module').SandboxModule);
        });
      })
    },

    {
      path: '**',
      loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], require => {
          resolve(require('../page-not-found/page-not-found.module').PageNotFoundModule);
        });
      })
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
