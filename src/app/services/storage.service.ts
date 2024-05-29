import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Pokemon } from '../models/pokemon';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  public favorites: object[] = [];

  constructor(
    private storage: Storage,
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

      favorites.push(pokemon);

      await this.storage.set('favorites', favorites);
      this.notifications.alertSuccess('Pokémon salvo com sucesso aos seus favoritos!');

    } catch (error) {
      this.notifications.alertError('Algo deu errado ao tentar favoritar!');
    }
  }

  public async getStorageData(): Promise<any[]> {
    return await this.storage.get('favorites') || [];
  }
}
