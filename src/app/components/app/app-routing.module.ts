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

    // ----- ADMIN ----- //
    {
      path: 'admin',
      loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], require => {
          resolve(require('../admin/admin.module').AdminModule);
        });
      })
    },

    // ----- HEROS ----- //
    {
      path: 'heroes',
      loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], require => {
          resolve(require('../heroes/heroes.module').HeroesModule);
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

    // ----- VILLAINS ----- //
    {
      path: 'villains',
      loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], require => {
          resolve(require('../villains/villains.module').VillainsModule);
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
