import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { take } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.page.html',
  styleUrls: ['./list-pokemons.page.scss'],
})

export class ListPokemonsPage implements OnInit {

  public pokemons: Pokemon[];
  public page: number = 1;
  public totalPokemons: number;

  constructor(
    private pokemonService: PokemonService,
    private navParam: NavParams,
    private stogareService: StorageService,
    private router: Router,
  ) {
    this.pokemons = [];
    this.totalPokemons = 0;
  }

  async ngOnInit() {
    const promise = this.pokemonService.getAllPokemons();

    if (promise) {
      promise.then((result: Pokemon[]) => {
        this.pokemons = result;
        this.totalPokemons = this.pokemons.length;
      });
    }

    this.stogareService.initializeStorage();
  }

  pokemonDatails(pokemon: Pokemon) {
    this.navParam.data['pokemon'] = pokemon;
    this.router.navigate(['/datails-pokemons']);
  }

  navigateToFavorites() {
    this.router.navigate(['/favorites-pokemons']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
