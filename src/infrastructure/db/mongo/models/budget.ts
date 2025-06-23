import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ _id: false })
export class BudgetORM {
  @Prop()
  hourFrom: number;

  @Prop()
  hourTo: number;

  @Prop({ required: true })
  total: number;
}