import { IProjectOptions } from "@/domain/interfaces/project-options";
import { Project } from "@/domain/models/projects";

export interface IProjectRepository {

    getAll(): Promise<Project[]>
    get(id: number): Promise<Project>
    findBy(projectOptions: IProjectOptions): Promise<Project[]>
    apply(): Promise<void>

} 