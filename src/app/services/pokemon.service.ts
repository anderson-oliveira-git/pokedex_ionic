import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  public urlApi: string = 'https://pokeapi.co/api/v2/pokemon/?limit=806';

  constructor () {}

  getAllPokemons(): Promise<any[]> | null {
    const options = {
      url: this.urlApi,
      headers: {},
      params: {}
    };

    return CapacitorHttp.get(options).then(async (response) => {
      let pokemons: Pokemon[] = [];

      if (response.data) {
        const results = response.data.results;

        const promises: Promise<any>[] = results.map(async (pokemon: any, index: number) => {
          const urlPokemon = pokemon.url;
          const options = {
            url: urlPokemon,
            headers: {},
            params: {}
          };

          return CapacitorHttp.get(options).then(response => ({
            index,
            data: response.data
          }));
        });

        const responses = await Promise.all(promises);

        responses.forEach(pokemon => {
          const pokemonObject = new Pokemon();

          pokemonObject.id    = pokemon.data.id;
          pokemonObject.name  = pokemon.data.name;
          pokemonObject.type1 = pokemon.data.types[0].type.name;

          if (pokemon.data.types[1]) {
            pokemonObject.type2 = pokemon.data.types[1].type.name;
          }

          pokemonObject.sprite = pokemon.data.sprites.front_default;
          pokemonObject.weight = pokemon.data.weight / 10;
          pokemonObject.height = pokemon.data.height / 10;
          pokemonObject.stats  = pokemon.data.stats;

          pokemonObject.abilities = pokemon.data.abilities
            .filter((ability: any) => !ability.is_hidden)
            .map((ability: any) => ability.ability.name);

          const hidden_ability = pokemon.data.abilities
            .find((ability: any) => ability.is_hidden);

          if (hidden_ability) {
            pokemonObject.hidden_ability = hidden_ability.ability.name;
          }

          pokemons.push(pokemonObject);
        });
      }

      return pokemons;
    });
  }
}
