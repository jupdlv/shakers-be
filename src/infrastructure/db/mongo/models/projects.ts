import { BudgetORM } from "@/infrastructure/db/mongo/models/budget";
import { CategoryORM } from "@/infrastructure/db/mongo/models/categories";
import { Faq as FaqORM } from "@/infrastructure/db/mongo/models/faqs";
import { OrganizationORM } from "@/infrastructure/db/mongo/models/organizations";
import { PositionORM } from "@/infrastructure/db/mongo/models/positions";
import { SubCategoryORM } from "@/infrastructure/db/mongo/models/subcategories";
import { User as UserORM } from "@/infrastructure/db/mongo/models/user";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({collection: "projects"})
export class ProjectORM {
  @Prop({ required: true })
  id: Number;

  @Prop({ required: true })
  title: string;

  @Prop({ type: OrganizationORM, required: true })
  organization: OrganizationORM;

  @Prop({ type: UserORM, required: true })
  projectLeader: UserORM;

  @Prop({ type: Number, ref: 'categories' })
  category: Number | CategoryORM ;

  @Prop({ type: Number, ref: 'subcategories' })
  subcategory: Number | SubCategoryORM;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: BudgetORM, required: true })
  budget: BudgetORM;

  @Prop({ required: true })
  totalHours: number;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Array<String>, required: true })
  goals: string[];

  @Prop({ type: Array<FaqORM>, required: true })
  faqs: FaqORM[];

  @Prop({ type: String , required: true })
  status: string;

  @Prop({ type: Date, required: true })
  creationDate: Date;

  @Prop({ type: [PositionORM], required: true })
  positions: PositionORM[];

  @Prop({ required: true })
  totalApplicationsAmount: number;

  @Prop({ type: Date, required: true })
  publishedAt: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(ProjectORM);
