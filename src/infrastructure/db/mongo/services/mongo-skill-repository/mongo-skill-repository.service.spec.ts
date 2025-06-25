import { Test, TestingModule } from '@nestjs/testing';
import { MongoSkillRepositoryService } from './mongo-skill-repository.service';

describe('MongoSkillRepositoryService', () => {
  let service: MongoSkillRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoSkillRepositoryService],
    }).compile();

    service = module.get<MongoSkillRepositoryService>(MongoSkillRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
