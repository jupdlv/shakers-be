import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class IndustriesORM{
  @Prop({ required: true })
  _id: Number;

  @Prop({ required: true })
  name: String;
}

export const IndustriesSchema = SchemaFactory.createForClass(IndustriesORM);