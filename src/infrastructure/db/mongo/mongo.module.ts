import { CategorySchema } from "@/infrastructure/db/mongo/models/categories";
import { ProjectSchema } from "@/infrastructure/db/mongo/models/projects";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/shakers'),
        MongooseModule.forFeature([{ name: "projects", schema: ProjectSchema }]),
        MongooseModule.forFeature([{ name: "categories", schema: CategorySchema }])
    ],
    exports: [
        MongooseModule.forFeature([{ name: "projects", schema: ProjectSchema }]),
        MongooseModule.forFeature([{ name: "categories", schema: CategorySchema }])
    ]
})
export class MongoModule { }