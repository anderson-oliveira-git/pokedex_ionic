import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module')
      .then((m) => m.HomePageModule)
  },
  {
    path: 'pokemons',
    loadChildren: () => import('../pages/list-pokemons/list-pokemons.module')
      .then((m) => m.ListPokemonsPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('../pages/favorites-pokemons/favorites-pokemons.module')
      .then((m) => m.FavoritesPokemonsPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TabsPageRoutingModule {}
