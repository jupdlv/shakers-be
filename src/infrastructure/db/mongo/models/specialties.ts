import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class SpecialtiesORM {
  @Prop({ required: true })
  name: string;
}
