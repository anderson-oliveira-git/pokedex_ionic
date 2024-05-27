import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesPokemonsPage } from './favorites-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesPokemonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesPokemonsPageRoutingModule {}
