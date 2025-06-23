import { IProjectOptions } from "@/domain/interfaces/projectOptions";
import { Project } from "@/domain/models/projects";
import { projectRepository } from "@/domain/services/projectRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProjectUseCases {

    public async getAllProjects(projectRepository: projectRepository): Promise<Project[]>{
        return await projectRepository.getAll()
    }

    public async getProjectExtraInfo(projectRepository: projectRepository, id: number): Promise<Project>{
        return await projectRepository.get(id)
    }

    public async filterProjects(projectRepository: projectRepository, IProjectOptions: IProjectOptions): Promise<Project[]> {
        return projectRepository.findBy(IProjectOptions)
    }

    public applyPosition(projectRepository: projectRepository): void{
        projectRepository.apply
    }
}