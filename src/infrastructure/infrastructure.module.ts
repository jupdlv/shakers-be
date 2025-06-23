import { MongoRepositoryService } from '@/infrastructure/db/mongo/services/mongo-repository/mongo-repository.service';
import { MongoModule } from '@/infrastructure/db/mongo/services/mongo-repository/mongo.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [MongoModule],
    providers: [MongoRepositoryService],
    exports: [MongoRepositoryService],
})
export class InfrastructureModule { }