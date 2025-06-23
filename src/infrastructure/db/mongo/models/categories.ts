import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class CategoryORM {
  @Prop({ required: true })
  name: string;
}
