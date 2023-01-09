export class Service {
  constructor(
    public count: number,
    public name: string,
    public price: number
  ) {}
}

export class Discount {
  constructor(public name: string, public rate: number) {}
}
