import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({collection: "skills"})
export class SkillsORM {

  @Prop({ required: true })
  _id: Number;
  @Prop({ required: true })
  name: String;
}
export const SkillsSchema = SchemaFactory.createForClass(SkillsORM);