import { ProjectSchema } from "@/infrastructure/db/mongo/models/projects";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/shakers'),
        MongooseModule.forFeature([{ name: "projects", schema: ProjectSchema }])
    ],
    exports: [
        MongooseModule.forFeature([{ name: "projects", schema: ProjectSchema }])
    ]
})
export class MongoModule { }