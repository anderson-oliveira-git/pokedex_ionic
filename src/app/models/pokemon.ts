import { Stat } from "./stat";

export class Pokemon {
  id: number;
  name: string;
  type1: string;
  type2?: string;
  sprite: string;
  height: number;
  weight: number;
  abilities: string[];
  hidden_ability: string;
  stats: Stat[];

  constructor () {
    this.id = 0;
    this.name = '';
    this.type1 = '';
    this.type2 = '';
    this.sprite = '';
    this.height = 0;
    this.weight = 0;
    this.abilities = [];
    this.hidden_ability = '';
    this.stats = [];
  }
}
