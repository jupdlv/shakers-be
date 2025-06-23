import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class IndustriesORM{
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;
}