export class Pokemon {
  constructor(
    public id: number,
    public name: { english: string },
    public type: Array<string>,
    public species: string,
    public image: { hires: string  }
  ) {}
}
