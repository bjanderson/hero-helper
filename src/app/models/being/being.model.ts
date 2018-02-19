export class Being {

  id: string;
  name: string;

  constructor(obj?: any) {
    obj = obj != null ? obj : {};
    this.id = obj != null && obj.id != null ? obj.id : '';
    this.name = obj != null && obj.name != null ? obj.name : '';
  }
}
