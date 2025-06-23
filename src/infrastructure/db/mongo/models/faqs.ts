import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ _id: false })
export class Faq {
  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  answer: string;
}