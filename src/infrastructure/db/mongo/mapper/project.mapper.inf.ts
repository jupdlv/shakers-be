import { EProjectStatus } from "@/domain/enum/project-status";
import { MapperOrmDomain } from "@/application/mapper/mapper.app";
import { IProjectProps } from "@/domain/interfaces/project-props";
import { Project } from "@/domain/models/projects";
import { CategoryMapper } from "@/infrastructure/db/mongo/mapper/category.mappper.inf";
import { OrganizationMapper } from "@/infrastructure/db/mongo/mapper/organization.mapper.inf";
import { PositionMapper } from "@/infrastructure/db/mongo/mapper/postions.mapper.inf";
import { SubCategoryMapper } from "@/infrastructure/db/mongo/mapper/subcategory.mapper.inf";
import { ProjectORM } from "@/infrastructure/db/mongo/models/projects";

export class ProjectMapper implements MapperOrmDomain<ProjectORM, Project> {
    fromOrmToDomain(entity: ProjectORM): Project {
        const projectProps: IProjectProps = {
            title: entity.title,
            organization: new OrganizationMapper().fromOrmToDomain(entity.organization),
            projectLeader: entity.projectLeader,
            category: new CategoryMapper().fromOrmToDomain(entity.category),
            subCategory: new SubCategoryMapper().fromOrmToDomain(entity.subcategory),
            startDate: entity.startDate,
            budget: entity.budget,
            totalHours: entity.totalHours,
            description: entity.description,
            goals: entity.goals,
            faqs: entity.faqs,
            status: entity.status as unknown as EProjectStatus,
            creationDate: entity.creationDate,
            positions: entity.positions.map(position => new PositionMapper().fromOrmToDomain(position)),
            totalApplicationsAmount: entity.totalApplicationsAmount,
            publishedAt: entity.publishedAt,
        }
        return new Project(projectProps)
    }
    fromDomainToOrm(entity: Project): ProjectORM {
        throw new Error("Method not implemented.");
    }



}