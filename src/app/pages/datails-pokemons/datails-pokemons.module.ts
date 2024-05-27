import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatailsPokemonsPageRoutingModule } from './datails-pokemons-routing.module';

import { DatailsPokemonsPage } from './datails-pokemons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatailsPokemonsPageRoutingModule
  ],
  declarations: [DatailsPokemonsPage]
})
export class DatailsPokemonsPageModule {}
