import { Category } from "@/domain/models/categories";
import { MongoCategoryRepositoryService } from "@/infrastructure/db/mongo/services/mongo-category-repository/mongo-category-repository.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoryUseCases {

    constructor(private categoryRepository: MongoCategoryRepositoryService) {
    }

    public async getAllCategories(): Promise<Category[]>{
        return await this.categoryRepository.getAll()
    }

}