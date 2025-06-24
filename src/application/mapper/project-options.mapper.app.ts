import { EOrderByPublishDate, IProjectOptionsDto } from "@/application/dto/project-options";
import { MapperDtoDomain } from "@/application/mapper/mapper.app";
import { IProjectOptions } from "@/domain/interfaces/project-options";

export class ProjectOptionsMapper implements MapperDtoDomain<IProjectOptionsDto, IProjectOptions> {
    fromDtoToDomain(dto: IProjectOptionsDto): IProjectOptions {
        return {
            specialties: dto?.specialties ,
            skills: dto?.skills ,
            categories: dto?.categories ,
            industries: dto?.industries ,
            orderByPublishDate: dto?.orderByPublishDate ?? EOrderByPublishDate.ASC
        }
    }
    fromDomainToDto(domain: IProjectOptions): IProjectOptionsDto {
        throw new Error("Method not implemented.");
    }

}