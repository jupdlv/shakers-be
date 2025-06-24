import { IPorjectDto } from '@/application/dto/project';
import { IProjectOptionsDto } from '@/application/dto/project-options';
import { ProjectMapper } from '@/application/mapper/porject.mapper.app';
import { ProjectOptionsMapper } from '@/application/mapper/project-options.mapper.app';
import { ProjectUseCases } from '@/application/use-cases/project.use-case';
import { Project } from '@/domain/models/projects';
import { MongoRepositoryService } from '@/infrastructure/db/mongo/services/mongo-project-repository/mongo-project-repository.service';
import { Body, Controller, Get, Param } from '@nestjs/common';

@Controller('project')
export class ProjectController {

    private projectMapper = new ProjectMapper()

    constructor(
        private readonly projectUseCase: ProjectUseCases
    ) { }

    @Get()
    async getProjects(): Promise<IPorjectDto[]> { //TODO: Temporalmente, hay que hacer el parseador DTO
        const projects: Project[] = await this.projectUseCase.getAllProjects() //TODO: refactor 
        return projects.map(project => this.projectMapper.fromDomainToDto(project))
    }

    /* @Post("filter") */
    @Get("filter")
    async filterProjects(@Body() filters: IProjectOptionsDto): Promise<IPorjectDto[]> {
        const projects: Project[] = await this.projectUseCase.filterProjects(new ProjectOptionsMapper().fromDtoToDomain(filters))
        return projects.map(project => this.projectMapper.fromDomainToDto(project))
    }

    @Get(":id")
    async getProjectById(@Param('id') id: string): Promise<IPorjectDto> {
        const project: Project = await this.projectUseCase.getProjectExtraInfo(id)
        return this.projectMapper.fromDomainToDto(project)
    }


}
