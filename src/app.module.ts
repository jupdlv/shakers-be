import { ProjectUseCases } from '@/application/use-cases/project.use-case';
import { ProjectController } from '@/controllers/project/project.controller';
import { InfrastructureModule } from '@/infrastructure/infrastructure.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [InfrastructureModule],
  controllers: [ProjectController],
  providers: [ProjectUseCases],
})
export class AppModule { }
