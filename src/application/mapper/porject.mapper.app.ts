import { IPorjectDto } from "@/application/dto/project.dto.app";
import { MapperDtoDomain } from "@/application/mapper/mapper.app";
import { Project } from "@/domain/models/projects";

export class ProjectMapper implements MapperDtoDomain<IPorjectDto, Project> {
    fromDtoToDomain(dto: IPorjectDto): Project {
        throw new Error("Method not implemented.");
    }
    fromDomainToDto(domain: Project): IPorjectDto {
        /* Due to lack of time, 
        this class doesn't follow the hexagonal principle maintained for the exchange between ORM and Domain. 
        Juan Perez
        */
        return {
            title: domain.title,
            organization: {
                id: domain.organization.id,
                logo: domain.organization.logo,
                name: domain.organization.name,
                industry: domain.organization.industry
            },
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