import { Test, TestingModule } from '@nestjs/testing';
import { MongoProjectRepositoryService } from './mongo-project-repository.service';

describe('MongoRepositoryService', () => {
  let service: MongoProjectRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoProjectRepositoryService],
    }).compile();

    service = module.get<MongoProjectRepositoryService>(MongoProjectRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
