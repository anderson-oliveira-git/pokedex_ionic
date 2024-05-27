import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokemonCardComponent } from './pokemon-card.component';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [PokemonCardComponent]
})

export class PokemonCardModule { }
