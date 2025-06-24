import { IProjectOptions } from "@/domain/interfaces/project-options";
import { Project } from "@/domain/models/projects";
import { MongoRepositoryService } from "@/infrastructure/db/mongo/services/mongo-project-repository/mongo-project-repository.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProjectUseCases {
    
    constructor(
        private readonly projectRepository: MongoRepositoryService,
    ) { }

    public async getAllProjects(): Promise<Project[]> {
        return await this.projectRepository.getAll()
    }

    public async getProjectExtraInfo( id: number): Promise<Project> {
        return await this.projectRepository.get(id)
    }

    public async filterProjects(IProjectOptions: IProjectOptions): Promise<Project[]> {
        return this.projectRepository.findBy(IProjectOptions)
    }

    public applyPosition(): void {
        this.projectRepository.apply()
    }
}