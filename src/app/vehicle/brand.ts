export class Brand {
  marca: string;
  quantity?: number;

  public constructor(marca: string, quantity?: number) {
    this.marca = marca;
    this.quantity = quantity;
  }
}
