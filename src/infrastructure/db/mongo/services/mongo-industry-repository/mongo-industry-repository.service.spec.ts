import { Test, TestingModule } from '@nestjs/testing';
import { MongoIndustryRepositoryService } from './mongo-industry-repository.service';

describe('MongoIndustryRepositoryService', () => {
  let service: MongoIndustryRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoIndustryRepositoryService],
    }).compile();

    service = module.get<MongoIndustryRepositoryService>(MongoIndustryRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
