import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-pokemons',
    loadChildren: () => import('./pages/list-pokemons/list-pokemons.module')
      .then( m => m.ListPokemonsPageModule)
  },
  {
    path: 'datails-pokemons',
    loadChildren: () => import('./pages/datails-pokemons/datails-pokemons.module')
      .then( m => m.DatailsPokemonsPageModule)
  },
  {
    path: 'favorites-pokemons',
    loadChildren: () => import('./pages/favorites-pokemons/favorites-pokemons.module')
      .then( m => m.FavoritesPokemonsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
