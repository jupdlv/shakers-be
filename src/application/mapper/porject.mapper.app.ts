import { IPorjectDto } from "@/application/dto/project";
import { MapperDtoDomain } from "@/application/mapper/mapper.app";
import { Project } from "@/domain/models/projects";

export class ProjectMapper implements MapperDtoDomain<IPorjectDto, Project> {
    fromDtoToDomain(dto: IPorjectDto): Project {
        throw new Error("Method not implemented.");
    }
    fromDomainToDto(domain: Project): IPorjectDto {
        return {
            title: domain.title,
            organization: domain.organization,
            projectLeader: domain.projectLeader,
            category: domain.category,
            subCategory: domain.subCategory,
            startDate: domain.startDate,
            budget: domain.budget,
            totalHours: domain.totalHours,
            description: domain.description,
            goals: domain.goals,
            faqs: domain.faqs,
            status: domain.status,
            creationDate: domain.creationDate,
            positions: domain.positions,
            totalApplicationsAmount: domain.totalApplicationsAmount,
            publishedAt: domain.publishedAt
        }
    }

}