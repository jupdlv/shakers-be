import { CategoryUseCases } from '@/application/use-cases/category.use-case';
import { Category } from '@/domain/models/categories';
import { Controller, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {

    constructor(private categoryUseCases: CategoryUseCases) {
    }

    @Get()
    async getCategories(): Promise<Category[]> { 
        return this.categoryUseCases.getAllCategories()
    }
}
