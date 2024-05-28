import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-datails-pokemons',
  templateUrl: './datails-pokemons.page.html',
  styleUrls: ['./datails-pokemons.page.scss'],
})

export class DatailsPokemonsPage {

  public pokemon: Pokemon;

  constructor(
    private navParams: NavParams,
    private navController: NavController
  ) {
    this.pokemon = this.navParams.get('pokemon');
  }

  navigateToPokemons() {
    this.navController.back();
  }
}
