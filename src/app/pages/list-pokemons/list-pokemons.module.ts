import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPokemonsPageRoutingModule } from './list-pokemons-routing.module';

import { ListPokemonsPage } from './list-pokemons.page';
import { PokemonCardModule } from 'src/app/components/pokemon-card/pokemon-card.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFilterPipe } from 'src/app/custom-filter-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPokemonsPageRoutingModule,
    PokemonCardModule,
    NgxPaginationModule,
  ],
  declarations: [ListPokemonsPage, CustomFilterPipe]
})

export class ListPokemonsPageModule {}
