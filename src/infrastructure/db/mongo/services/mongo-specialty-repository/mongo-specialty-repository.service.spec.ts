import { Test, TestingModule } from '@nestjs/testing';
import { MongoSpecialtyRepositoryService } from './mongo-specialty-repository.service';

describe('MongoSpecialtyRepositoryService', () => {
  let service: MongoSpecialtyRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoSpecialtyRepositoryService],
    }).compile();

    service = module.get<MongoSpecialtyRepositoryService>(MongoSpecialtyRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
