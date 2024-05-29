import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-datails-pokemons',
  templateUrl: './datails-pokemons.page.html',
  styleUrls: ['./datails-pokemons.page.scss'],
})

export class DatailsPokemonsPage {

  public pokemon: Pokemon;

  constructor(
    private navParams: NavParams,
    private storageService: StorageService,
    private router: Router
  ) {
    this.storageService.initializeStorage();
    this.pokemon = this.navParams.get('pokemon');
  }

  saveFavorite(pokemon: Pokemon) {
    this.storageService.saveOnStorage(pokemon);
  }

  navigateToPokemons() {
    this.router.navigate(['/list-pokemons']);
  }
}
