import { IStaticRepository } from '@/domain/interfaces/static-repository';
import { Industry } from '@/domain/models/industry';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoIndustryRepositoryService implements IStaticRepository<Industry>{
    constructor() {
    }
    getAll(): Promise<Industry[]> {
        throw new Error('Method not implemented.');
    }
}
