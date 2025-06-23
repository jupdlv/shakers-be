import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class SkillsORM {
  @Prop({ required: true })
  name: string;
}
