import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class CategoryORM {
  @Prop({ required: true })
  _id: number;
  @Prop({ required: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryORM);