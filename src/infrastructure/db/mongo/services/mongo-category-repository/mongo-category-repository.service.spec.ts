import { Test, TestingModule } from '@nestjs/testing';
import { MongoCategoryRepositoryService } from './mongo-category-repository.service';

describe('MongoCategoryRepositoryService', () => {
  let service: MongoCategoryRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoCategoryRepositoryService],
    }).compile();

    service = module.get<MongoCategoryRepositoryService>(MongoCategoryRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
