export class Answer {
  person: string;
  values: Record<string, string>;

  constructor(person: string, values: Record<string, string>) {
    this.person = person;
    this.values = values;
  }
}