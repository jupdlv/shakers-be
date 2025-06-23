import { ProjectUseCases } from '@/application/use-cases/project';
import { Project } from '@/domain/models/projects';
import { MongoRepositoryService } from '@/infrastructure/db/mongo/services/mongo-repository/mongo-repository.service';
import { Controller, Get } from '@nestjs/common';

@Controller('project')
export class ProjectController {

    constructor(
        private readonly mongoRepository: MongoRepositoryService,
        private readonly projectUseCase: ProjectUseCases
    ) { }

    @Get()
    getProjects(): Promise<Project[]> { //TODO: Temporalmente, hay que hacer el parseador DTO
        return this.projectUseCase.getAllProjects(this.mongoRepository)
    }

}
