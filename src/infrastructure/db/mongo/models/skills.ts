import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class SkillsORM {

  @Prop({ required: true })
  id: Number;
  @Prop({ required: true })
  name: String;
}
