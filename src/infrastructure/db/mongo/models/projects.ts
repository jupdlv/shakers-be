import { BudgetORM } from "@/infrastructure/db/mongo/models/budget";
import { Faq } from "@/infrastructure/db/mongo/models/faqs";
import { OrganizationORM } from "@/infrastructure/db/mongo/models/organizations";
import { Position } from "@/infrastructure/db/mongo/models/positions";
import { User } from "@/infrastructure/db/mongo/models/user";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ProjectORM {
  @Prop({ required: true })
  title: string;

  @Prop({ type: OrganizationORM, required: true })
  organization: OrganizationORM;

  @Prop({ type: User, required: true })
  projectLeader: User;

  @Prop({ type: Number})
  category: Number;

  @Prop({ type: Number})
  subcategory: Number;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: BudgetORM, required: true })
  budget: BudgetORM;

  @Prop({ required: true })
  totalHours: number;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], required: true })
  goals: string[];

  @Prop({ type: [Faq], required: true })
  faqs: Faq[];

  @Prop({ type: String , required: true })
  status: string;

  @Prop({ type: Date, required: true })
  creationDate: Date;

  @Prop({ type: [Position], required: true })
  positions: Position[];

  @Prop({ required: true })
  totalApplicationsAmount: number;

  @Prop({ type: Date, required: true })
  publishedAt: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(ProjectORM);
