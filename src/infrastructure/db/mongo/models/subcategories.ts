import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({collection: "subcategories"})
export class SubCategoryORM {
  @Prop({ type: Number, required: true })
  _id: number;

  @Prop({ required: true })
  name: string;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategoryORM);
