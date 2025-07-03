import { CategorySchema } from "@/infrastructure/db/mongo/models/categories";
import { IndustriesSchema } from "@/infrastructure/db/mongo/models/industries";
import { ProjectSchema } from "@/infrastructure/db/mongo/models/projects";
import { SkillsSchema } from "@/infrastructure/db/mongo/models/skills";
import { SpecialtiesSchema } from "@/infrastructure/db/mongo/models/specialties";
import { SubCategorySchema } from "@/infrastructure/db/mongo/models/subcategories";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/shakers'),
        MongooseModule.forFeature([{ name: "projects", schema: ProjectSchema }]),
        MongooseModule.forFeature([{ name: "categories", schema: CategorySchema }]),
        MongooseModule.forFeature([{ name: "subcategories", schema: SubCategorySchema }]),
        MongooseModule.forFeature([{ name: "industries", schema: IndustriesSchema }]),
        MongooseModule.forFeature([{ name: "skills", schema: SkillsSchema }]),
        MongooseModule.forFeature([{ name: "specialties", schema: SpecialtiesSchema }])

    ],
    exports: [
        MongooseModule.forFeature([{ name: "projects", schema: ProjectSchema }]),
        MongooseModule.forFeature([{ name: "categories", schema: CategorySchema }]),
        MongooseModule.forFeature([{ name: "subcategories", schema: SubCategorySchema }]),
        MongooseModule.forFeature([{ name: "industries", schema: IndustriesSchema }]),
        MongooseModule.forFeature([{ name: "skills", schema: SkillsSchema }]),
        MongooseModule.forFeature([{ name: "specialties", schema: SpecialtiesSchema }])
    ]
})
export class MongoModule { }