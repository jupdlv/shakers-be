import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class SpecialtiesORM {

  @Prop({ required: true })
  id: Number;

  @Prop({ required: true })
  name: String;
}
