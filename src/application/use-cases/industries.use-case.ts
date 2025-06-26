import { Industry } from "@/domain/models/industry";
import { MongoIndustryRepositoryService } from "@/infrastructure/db/mongo/services/mongo-industry-repository/mongo-industry-repository.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class IndustryUseCases {

    constructor(private industryRepository: MongoIndustryRepositoryService) {
    }

    public async getAllCategories(): Promise<Industry[]>{
        return await this.industryRepository.getAll()
    }

}