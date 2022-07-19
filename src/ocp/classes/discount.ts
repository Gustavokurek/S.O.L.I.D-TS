export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - (price * this.discount) / 100;
  }
}

export class TenPercentDiscount extends Discount {
  protected discount = 10;
}
export class NoDiscount extends Discount {}