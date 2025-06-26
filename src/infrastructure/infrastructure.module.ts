import { MongoProjectRepositoryService } from '@/infrastructure/db/mongo/services/mongo-project-repository/mongo-project-repository.service';
import { MongoModule } from '@/infrastructure/db/mongo/mongo.module';
import { Module } from '@nestjs/common';
import { MongoCategoryRepositoryService } from '@/infrastructure/db/mongo/services/mongo-category-repository/mongo-category-repository.service';

@Module({
    imports: [MongoModule],
    providers: [MongoProjectRepositoryService, MongoCategoryRepositoryService],
    exports: [MongoProjectRepositoryService, MongoCategoryRepositoryService],
})
export class InfrastructureModule { }