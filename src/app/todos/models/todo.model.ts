export class Todo {
  id: number;
  text: string;
  complet: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = Math.random();
    this.complet = false;
  }
}
