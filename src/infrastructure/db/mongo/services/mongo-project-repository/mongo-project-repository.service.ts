import { IProjectOptions } from '@/domain/interfaces/project-options';
import { Project } from '@/domain/models/projects';
import { IProjectRepository } from '@/domain/interfaces/project-repository';
import { ProjectORM } from '@/infrastructure/db/mongo/models/projects';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, RootFilterQuery } from 'mongoose';
import { ProjectMapper } from '@/infrastructure/db/mongo/mapper/project.mapper.inf';
import { EOrderByPublishDate } from '@/application/dto/project-options.dto.app';

@Injectable()
export class MongoProjectRepositoryService implements IProjectRepository {

    projectMapper: ProjectMapper = new ProjectMapper()

    constructor(@InjectModel("projects") private readonly projectDB: Model<ProjectORM>) {
    }

    public async getAll(): Promise<Project[]> {
        const projects: ProjectORM[] = await this.projectDB.find()
        return projects.map(project => this.projectMapper.fromOrmToDomain(project));
    }

    public async get(id: number): Promise<Project> {
        const project: ProjectORM | undefined | null = await this.projectDB.findOne({id: id})
        if (!project) throw new HttpException("This project not exists", HttpStatus.BAD_REQUEST)
        return this.projectMapper.fromOrmToDomain(project)
    }

    public async findBy(projectOptions: IProjectOptions): Promise<Project[]> {
        const projects: ProjectORM[] = await this.projectDB.find(this.generateFilter(projectOptions)).sort((projectOptions?.orderByPublishDate ? { publishedAt: projectOptions.orderByPublishDate == EOrderByPublishDate.ASC ? 1 : -1 } : {}))
        return projects.map(project => new ProjectMapper().fromOrmToDomain(project));
    }
    public apply(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    private generateFilter(projectOptions: IProjectOptions): RootFilterQuery<ProjectORM> {
        let filterQuery: RootFilterQuery<ProjectORM> = {}
        if (projectOptions.categories) filterQuery["category"] = { $in: projectOptions.categories }
        if (projectOptions.industries) filterQuery["organization.industry"] = { $in: projectOptions.industries }
        if (projectOptions.skills) filterQuery["positions.skills"] = { $in: projectOptions.skills }
        if (projectOptions.specialties) filterQuery["positions.specialties"] = { $in: projectOptions.specialties }
        return filterQuery
    }

}
