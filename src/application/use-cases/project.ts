import { IProjectOptions } from "@/domain/interfaces/projectOptions";
import { Project } from "@/domain/models/projects";
import { projectRepository } from "@/domain/services/projectRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProjectUseCases {

    public getAllProjects(projectRepository: projectRepository){
        return projectRepository.getAll()
    }

    public filterProjects(projectRepository: projectRepository, IProjectOptions: IProjectOptions): Project[] {
        return projectRepository.findBy(IProjectOptions)
    }

    public applyPosition(projectRepository: projectRepository): void{
        projectRepository.apply
    }
}