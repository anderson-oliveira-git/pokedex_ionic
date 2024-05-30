import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPokemonsPageRoutingModule } from './favorites-pokemons-routing.module';

import { FavoritesPokemonsPage } from './favorites-pokemons.page';
import { PokemonCardModule } from 'src/app/components/pokemon-card/pokemon-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPokemonsPageRoutingModule,
    PokemonCardModule
  ],
  declarations: [FavoritesPokemonsPage]
})
export class FavoritesPokemonsPageModule {}
