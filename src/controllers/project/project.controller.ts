import { ProjectUseCases } from '@/application/use-cases/project';
import { IProjectOptions } from '@/domain/interfaces/projectOptions';
import { Project } from '@/domain/models/projects';
import { MongoRepositoryService } from '@/infrastructure/db/mongo/services/mongo-repository/mongo-repository.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('project')
export class ProjectController {

    constructor(
        private readonly mongoRepository: MongoRepositoryService,
        private readonly projectUseCase: ProjectUseCases
    ) { }

    @Get()
    async getProjects(): Promise<Project[]> { //TODO: Temporalmente, hay que hacer el parseador DTO
        return await this.projectUseCase.getAllProjects(this.mongoRepository)
    }

    /* @Post("filter") */
    @Get("filter")
    async filterProjects(/* @Body() filters: IProjectOptions */): Promise<Project[]> {
        const filter: IProjectOptions = {
            skills: [16, 12, 14]
        }
        return await this.projectUseCase.filterProjects(this.mongoRepository, filter)
    }

    @Get(":id")
    async getProjectById(@Param('id') id: number): Promise<Project> { //TODO: Temporalmente, hay que hacer el parseador DTO
        return await this.projectUseCase.getProjectExtraInfo(this.mongoRepository, id)
    }


}
