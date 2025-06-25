import { IStaticRepository } from '@/domain/interfaces/static-repository';
import { CategoryORM } from '@/infrastructure/db/mongo/models/categories';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongoCategoryRepositoryService implements IStaticRepository<CategoryORM>{


    constructor(@InjectModel("categories") private readonly categoryDB: Model<CategoryORM>) {
    }

    async getAll(): Promise<CategoryORM[]> {
        return await this.categoryDB.find()
    }

}

