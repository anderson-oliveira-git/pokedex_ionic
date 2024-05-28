import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites-pokemons',
  templateUrl: './favorites-pokemons.page.html',
  styleUrls: ['./favorites-pokemons.page.scss'],
})
export class FavoritesPokemonsPage {

  constructor(
    private router: Router
  ){}

  navigateToListPokemons() {
    this.router.navigate(['/list-pokemons']);
  }
}
