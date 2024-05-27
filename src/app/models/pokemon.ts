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
}
