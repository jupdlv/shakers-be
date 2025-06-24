import { IProjectOptions } from "@/domain/interfaces/project-options";
import { Project } from "@/domain/models/projects";
import { MongoRepositoryService } from "@/infrastructure/db/mongo/services/mongo-project-repository/mongo-project-repository.service";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CastError } from "mongoose";

@Injectable()
export class ProjectUseCases {

    constructor(
        private readonly projectRepository: MongoRepositoryService,
    ) { }

    public async getAllProjects(): Promise<Project[]> {
        return await this.projectRepository.getAll()
    }

    public async getProjectExtraInfo(idString: string): Promise<Project> {
        try {
            const id = Number(idString)
            return await this.projectRepository.get(id)
        } catch (error) {
            throw new HttpException("Bad ID format", HttpStatus.BAD_REQUEST)
        }
    }

    public async filterProjects(IProjectOptions: IProjectOptions): Promise<Project[]> {
        return this.projectRepository.findBy(IProjectOptions)
    }

    public applyPosition(): void {
        this.projectRepository.apply()
    }
}