import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({collection: "specialties"})
export class SpecialtiesORM {

  @Prop({ required: true })
  _id: Number;

  @Prop({ required: true })
  name: String;
}
export const SpecialtiesSchema = SchemaFactory.createForClass(SpecialtiesORM);