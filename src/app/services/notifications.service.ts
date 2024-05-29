import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class NotificationsService {

  constructor(
    private alertController: AlertController,
  ){}

  async alertSuccess (message: string) {
    const alert = this.alertController.create({
      header: 'Sucesso!',
      message: message,
      buttons: ['Ok']
    });

    (await alert).present();
  }

  async alertError (message: string) {
    const alert = this.alertController.create({
      header: 'Erro!',
      message: message,
      buttons: ['Ok']
    });

    (await alert).present();
  }
}
