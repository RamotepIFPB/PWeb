export class Weight {
  values: Record<string, number>;

  constructor(values: Record<string, number>) {
    this.values = values;
  }

  total(): number {
    return Object.values(this.values).reduce((acc, v) => acc + v, 0);
  }
}