import { IProjectOptions } from "@/domain/interfaces/projectOptions";
import { Project } from "@/domain/models/projects";

export abstract class projectRepository {
    constructor() { }

    abstract getAll(): Promise<Project[]>
    abstract get(id: number): Promise<Project>
    abstract findBy(projectOptions: IProjectOptions): Promise<Project[]>
    abstract apply(): Promise<void>

} 