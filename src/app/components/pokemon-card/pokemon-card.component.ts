import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})

export class PokemonCardComponent {

  @Input()
  pokemon_name?: string;

  @Input()
  pokemon_image?: string;

  @Input()
  type_1?: string;

  @Input()
  type_2?: string;

  constructor() { }

}
