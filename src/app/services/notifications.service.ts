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

  async alertError (header: string, message: string) {
    const alert = this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok']
    });

    (await alert).present();
  }

  async alertConfirm(message: string, callback: () => void) {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: message,
      buttons: [
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            callback();
          }
        },
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            alert.dismiss();
          }
        }
      ]
    });

    (alert).present();
  }
}
