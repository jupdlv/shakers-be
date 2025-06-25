import { IndustryUseCases } from '@/application/use-cases/industries.use-case';
import { Industry } from '@/domain/models/industry';
import { Controller, Get } from '@nestjs/common';

@Controller('industry')
export class IndustryController {
    constructor(private industryUseCases: IndustryUseCases) {
    }
    @Get()
    async getCategories(): Promise<Industry[]> {
        return this.industryUseCases.getAllCategories()
    }
}
