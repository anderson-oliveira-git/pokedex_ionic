import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-favorites-pokemons',
  templateUrl: './favorites-pokemons.page.html',
  styleUrls: ['./favorites-pokemons.page.scss'],
})
export class FavoritesPokemonsPage {

  public pokemons: any[] = [];

  constructor(
    private router: Router,
    private storageService: StorageService
  ){
    this.storageService.initializeStorage();
    this.getFavoritesPokemons();
  }

  async getFavoritesPokemons() {
    this.pokemons = await this.storageService.getStorageData();
  }

  removeAllFavorites() {
    this.storageService.removeAll();
  }

  removeFavoritePokemon(indexPokemon: number) {
    this.storageService.removeOne(indexPokemon, this.pokemons[indexPokemon].name);
  }

  navigateToListPokemons() {
    this.router.navigate(['/list-pokemons']);
  }
}
