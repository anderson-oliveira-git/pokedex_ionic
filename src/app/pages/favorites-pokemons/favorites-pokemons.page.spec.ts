import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesPokemonsPage } from './favorites-pokemons.page';

describe('FavoritesPokemonsPage', () => {
  let component: FavoritesPokemonsPage;
  let fixture: ComponentFixture<FavoritesPokemonsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesPokemonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
