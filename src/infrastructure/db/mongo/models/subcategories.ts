import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class SubCategoryORM {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;
}
