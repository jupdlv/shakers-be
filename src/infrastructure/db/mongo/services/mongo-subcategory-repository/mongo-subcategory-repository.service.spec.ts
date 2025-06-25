import { Test, TestingModule } from '@nestjs/testing';
import { MongoSubcategoryRepositoryService } from './mongo-subcategory-repository.service';

describe('MongoSubcategoryRepositoryService', () => {
  let service: MongoSubcategoryRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoSubcategoryRepositoryService],
    }).compile();

    service = module.get<MongoSubcategoryRepositoryService>(MongoSubcategoryRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
