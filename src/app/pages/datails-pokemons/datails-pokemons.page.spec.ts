import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatailsPokemonsPage } from './datails-pokemons.page';

describe('DatailsPokemonsPage', () => {
  let component: DatailsPokemonsPage;
  let fixture: ComponentFixture<DatailsPokemonsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailsPokemonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
