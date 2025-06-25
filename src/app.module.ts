import { CategoryUseCases } from '@/application/use-cases/category.use-case';
import { ProjectUseCases } from '@/application/use-cases/project.use-case';
import { CategoryController } from '@/controllers/category/category.controller';
import { ProjectController } from '@/controllers/project/project.controller';
import { InfrastructureModule } from '@/infrastructure/infrastructure.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [InfrastructureModule],
  controllers: [ProjectController, CategoryController],
  providers: [ProjectUseCases, CategoryUseCases],
})
export class AppModule { }
