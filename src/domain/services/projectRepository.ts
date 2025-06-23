import { IProjectOptions } from "@/domain/interfaces/projectOptions";
import { Project } from "@/domain/models/projects";

export abstract class projectRepository {
    public projects: Project[]

    constructor(){
        
    }

    abstract getAll(): Promise<Project[]>
    abstract findBy(projectOptions: IProjectOptions): Project[]
    abstract apply(): void

} 