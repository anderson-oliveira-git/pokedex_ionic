import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPokemonsPage } from './list-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: ListPokemonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPokemonsPageRoutingModule {}
