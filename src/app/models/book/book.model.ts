export class Book {

  id: number;
  title: string;

  constructor(obj?: any) {
    this.id = obj != null && obj.id != null ? obj.id : 0;
    this.title = obj != null && obj.title != null ? obj.title : '';
  }
}
