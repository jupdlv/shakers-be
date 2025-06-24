import { IProjectOptions } from '@/domain/interfaces/project-options';
import { Project } from '@/domain/models/projects';
import { IProjectRepository } from '@/domain/interfaces/project-repository';
import { ProjectORM } from '@/infrastructure/db/mongo/models/projects';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectMapper } from '@/infrastructure/db/mongo/mapper/project.mapper.inf';

@Injectable()
export class MongoRepositoryService implements IProjectRepository {

    projectMapper: ProjectMapper = new ProjectMapper()

    constructor(@InjectModel("projects") private readonly projectDB: Model<ProjectORM>) {
    }

    public async getAll(): Promise<Project[]> {
        const projects: ProjectORM[] = await this.projectDB.find()
        return projects.map(project => this.projectMapper.fromOrmToDomain(project));
    }

    public async get(id: number): Promise<Project> {
        const project: ProjectORM = await this.projectDB.find({id: id})[0]
        return this.projectMapper.fromOrmToDomain(project)
    }

    public async findBy(projectOptions: IProjectOptions): Promise<Project[]> {
        const projects: ProjectORM[] = await this.projectDB.find({
            category: { $in: projectOptions.categories },
            "organization.industry": { $in: projectOptions.industries },
            "positions.skills": { $in: projectOptions.skills },
            "positions.specialties": { $in: projectOptions.especialties },
        }).sort((projectOptions?.orderByPublishDate ? { publishedAt: projectOptions.orderByPublishDate == 1 ? 1 : -1 } : {}))
        return projects.map(project => new ProjectMapper().fromOrmToDomain(project));
    }
    public apply(): Promise<void> {
        throw new Error('Method not implemented.');
    }

}
