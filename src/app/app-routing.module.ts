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
      loadChildren: './components/admin/admin.module#AdminModule'
    },

    // ----- HEROS ----- //
    {
      path: 'heroes',
      loadChildren: './components/heroes/heroes.module#HeroesModule'
    },

    // ----- HOME ----- //
    {
      path: 'home',
      loadChildren: './components/home/home.module#HomeModule'
    },

    // ----- VILLAINS ----- //
    {
      path: 'villains',
      loadChildren: './components/villains/villains.module#VillainsModule'
    },

    {
      path: '**',
      loadChildren: './components/page-not-found/page-not-found.module#PageNotFoundModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
