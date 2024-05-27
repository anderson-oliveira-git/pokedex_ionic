import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatailsPokemonsPage } from './datails-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: DatailsPokemonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatailsPokemonsPageRoutingModule {}
