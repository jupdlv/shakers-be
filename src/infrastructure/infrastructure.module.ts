import { MongoRepositoryService } from '@/infrastructure/db/mongo/services/mongo-project-repository/mongo-project-repository.service';
import { MongoModule } from '@/infrastructure/db/mongo/mongo.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [MongoModule],
    providers: [MongoRepositoryService],
    exports: [MongoRepositoryService],
})
export class InfrastructureModule { }