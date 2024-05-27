export class Stat {
  base_stat : number;
  effort    : number;
  stat: {
    name: string,
    url: string
  }

  constructor(base_stat: number, effort: number, name: string, url: string) {
    this.base_stat = base_stat;
    this.effort = effort;
    this.stat = { name, url };
  }
}
