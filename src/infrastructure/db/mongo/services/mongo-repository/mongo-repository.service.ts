import { IProjectOptions } from '@/domain/interfaces/projectOptions';
import { Project } from '@/domain/models/projects';
import { projectRepository } from '@/domain/services/projectRepository';
import { ProjectORM } from '@/infrastructure/db/mongo/models/projects';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongoRepositoryService extends projectRepository {

    constructor(@InjectModel("projects") private readonly mongoDB: Model<ProjectORM>) {
        super();
    }
    public async getAll(): Promise<any[]> {
        return this.mongoDB.find()
    }
    findBy(projectOptions: IProjectOptions): Project[] {
        throw new Error('Method not implemented.');
    }
    apply(): void {
        throw new Error('Method not implemented.');
    }

}
