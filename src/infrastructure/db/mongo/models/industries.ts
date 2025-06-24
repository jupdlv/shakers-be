import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class IndustriesORM{
  @Prop({ required: true })
  id: Number;

  @Prop({ required: true })
  name: String;
}