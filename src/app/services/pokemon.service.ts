import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private nextUrl: string;

  constructor () {
    this.nextUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6';
  }

  getAllPokemons () {
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
          this.nextUrl = response.data.next;

          const promises: Promise<any>[] = [];

          for (let index = 0; index < results.length; index++) {
            const pokemon = results[index];
            const url_pokemon = pokemon.url;
            const options = {
              url: url_pokemon,
              headers: {},
              params: {}
            }

            promises.push(CapacitorHttp.get(options));
          }

          await Promise.all(promises).then(responses => {
            for (const response of responses) {
              const pokemon_data = response.data;
              const pokemon_object = new Pokemon();

              pokemon_object.id = pokemon_data.order;
              pokemon_object.name = pokemon_data.name;
              pokemon_object.type1 = pokemon_data.types[0].type.name;

              if (pokemon_data.types[1]) {
                pokemon_object.type2 = pokemon_data.types[1].type.name;
              }

              pokemon_object.sprite = pokemon_data.sprites.front_default;
              pokemon_object.weight = pokemon_data.weight / 10;
              pokemon_object.height = pokemon_data.height / 10;
              pokemon_object.stats = pokemon_data.stats;

              pokemon_object.abilities = pokemon_data.abilities.filter((ab: any) => !ab.is_hidden)
                .map((ab: any) => ab.ability.name);

              const hidden_ability = pokemon_data.abilities.find((ab: any) => ab.is_hidden);

              if (hidden_ability) {
                pokemon_object.hidden_ability = hidden_ability.ability.name;
              }

              pokemons.push(pokemon_object);
            }
          });
        }

        return pokemons;
      });
    }

    return null;
  }
}
