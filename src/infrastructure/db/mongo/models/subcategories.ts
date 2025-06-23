import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class SubCategoryORM {
  @Prop({ required: true })
  name: string;
}
