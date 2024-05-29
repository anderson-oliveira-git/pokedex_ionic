import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  public nextUrl: string = 'https://pokeapi.co/api/v2/pokemon/?limit=806';

  constructor () {}

  getAllPokemons(): Promise<any[]> | null {
    const url: string = this.nextUrl;

    const options = {
      url,
      headers: {},
      params: {}
    };

    if (url) {
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

          responses.sort((a, b) => a.index - b.index).forEach(response => {
            const pokemonData = response.data;
            const pokemonObject = new Pokemon();

            pokemonObject.id = pokemonData.id;
            pokemonObject.name = pokemonData.name;
            pokemonObject.type1 = pokemonData.types[0].type.name;

            if (pokemonData.types[1]) {
              pokemonObject.type2 = pokemonData.types[1].type.name;
            }

            pokemonObject.sprite = pokemonData.sprites.front_default;
            pokemonObject.weight = pokemonData.weight / 10;
            pokemonObject.height = pokemonData.height / 10;
            pokemonObject.stats = pokemonData.stats;

            pokemonObject.abilities = pokemonData.abilities
              .filter((ab: any) => !ab.is_hidden)
              .map((ab: any) => ab.ability.name);

            const hidden_ability = pokemonData.abilities
              .find((ab: any) => ab.is_hidden);

            if (hidden_ability) {
              pokemonObject.hidden_ability = hidden_ability.ability.name;
            }

            pokemons.push(pokemonObject);
          });
        }

        return pokemons;
      });
    }

    return null;
  }
}
