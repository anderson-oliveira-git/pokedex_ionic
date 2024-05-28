import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  constructor(
    private router: Router,
  ){}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToPokemons() {
    this.router.navigate(['/list-pokemons']);
  }

  navigateToFavorites() {
    this.router.navigate(['/favorites-pokemons']);
  }
}
