import { Test, TestingModule } from '@nestjs/testing';
import { MongoRepositoryService } from './mongo-project-repository.service';

describe('MongoRepositoryService', () => {
  let service: MongoRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoRepositoryService],
    }).compile();

    service = module.get<MongoRepositoryService>(MongoRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
