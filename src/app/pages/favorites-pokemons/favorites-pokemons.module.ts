import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPokemonsPageRoutingModule } from './favorites-pokemons-routing.module';

import { FavoritesPokemonsPage } from './favorites-pokemons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPokemonsPageRoutingModule
  ],
  declarations: [FavoritesPokemonsPage]
})
export class FavoritesPokemonsPageModule {}
