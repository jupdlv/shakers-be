import { IProjectOptions } from '@/domain/interfaces/projectOptions';
import { Project } from '@/domain/models/projects';
import { projectRepository } from '@/domain/services/projectRepository';
import { ProjectORM } from '@/infrastructure/db/mongo/models/projects';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongoRepositoryService extends projectRepository {


    constructor(@InjectModel("projects") private readonly projectDB: Model<ProjectORM>) {
        super();
    }

    public async getAll(): Promise<any[]> {
        return this.projectDB.find()
    }

    get(id: number): Promise<Project> {
        throw new Error('Method not implemented.');
    }

    public async findBy(projectOptions: IProjectOptions): Promise<Project[]> {
        //TODO: order by
        return await this.projectDB.find({
/*             category: { $in: projectOptions.categories },
            "organization.industry": { $in: projectOptions.industries }, */
            "positions.skills": { $in: projectOptions.skills },
/*             "positions.specialties": { $in: projectOptions.especialties }, */
        })
    }
    public apply(): Promise<void> {
        throw new Error('Method not implemented.');
    }

}
