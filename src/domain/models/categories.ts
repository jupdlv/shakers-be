export class Category{
      _id: Number;
      name: String | undefined;

      constructor(id: Number, name: string | undefined){
        this._id = id
        this.name = name 
      }
}