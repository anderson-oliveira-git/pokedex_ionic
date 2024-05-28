import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

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
    private navController: NavController,
  ) {
    this.pokemons = [];
    this.totalPokemons = 0;
  }

  ngOnInit(): void {
    this.listPokemon();
  }

  async listPokemon() {
    const promise = this.pokemonService.getAllPokemons();

    if (promise) {
      promise.then((result: Pokemon[]) => {
        this.pokemons = result;
        this.totalPokemons = this.pokemons.length;
      });
    }
  }

  pokemonDatails(pokemon: Pokemon) {
    this.navParam.data['pokemon'] = pokemon;
    this.navController.navigateForward('datails-pokemons');
  }
}
