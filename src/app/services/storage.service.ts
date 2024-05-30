import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Pokemon } from '../models/pokemon';
import { NotificationsService } from './notifications.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  public favorites: object[] = [];

  constructor(
    private storage: Storage,
    private router: Router,
    private notifications: NotificationsService
  ){}

  public async initializeStorage() {
    await this.storage.create();
    const favorites = await this.storage.get('favorites');
    if (!favorites) {
      await this.storage.set('favorites', []);
    }
  }

  public async saveOnStorage(pokemon: Pokemon) {
    try {
      const favorites = await this.getStorageData();

      if (await this.verifyIfExistInStorage(pokemon.name)) {
        this.notifications.alertError('Atenção!', 'Esse pokemon já existe em seus favoritos!');
        return;
      }

      favorites.push(pokemon);

      await this.storage.set('favorites', favorites);
      this.notifications.alertSuccess('Pokémon salvo com sucesso aos seus favoritos!');

    } catch (error) {
      this.notifications.alertError('Eita!', 'Algo deu errado ao tentar favoritar!');
    }
  }

  public removeAll() {
    this.notifications.alertConfirm(
      'Tem certeza que deseja remover todos os favoritos?',
      async () => {
        await this.storage.clear();
        this.router.navigate(['/list-pokemons']);
        this.notifications.alertSuccess('Favoritos removidos com sucesso!');
        this.initializeStorage();
      }
    );
  }

  public async removeOne(index: number, pokemonName: string) {
    this.notifications.alertConfirm(
      `Tem certeza que deseja remover o ${pokemonName} dos favoritos?`,
      async () => {
        const favorites = await this.getStorageData();

        favorites.splice(index, 1);
        this.storage.set('favorites', favorites);

        this.notifications.alertSuccess(`${pokemonName} removido com sucesso!`);
        this.router.navigate(['/list-pokemons']);
      }
    );
  }

  public getStorageData(): Promise<any[]> {
    return this.storage.get('favorites') || [];
  }

  public async verifyIfExistInStorage(pokemonName: string): Promise<boolean> {
    const favorites = await this.getStorageData();
    return favorites.some(favorite => favorite.name === pokemonName);
  }
}
