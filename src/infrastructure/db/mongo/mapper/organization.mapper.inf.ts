import { MapperOrmDomain } from "@/application/mapper/mapper.app";
import { Organization } from "@/domain/models/organizations";
import { IndustryMapper } from "@/infrastructure/db/mongo/mapper/industry.mapper.inf";
import { OrganizationORM } from "@/infrastructure/db/mongo/models/organizations";

export class OrganizationMapper implements MapperOrmDomain<OrganizationORM, Organization> {
    fromOrmToDomain(entity: OrganizationORM): Organization {
        const industry = new IndustryMapper().fromOrmToDomain(entity.industriy)
        return new Organization(entity.id, entity.name, entity.logo, industry)
    }
    fromDomainToOrm(entity: Organization): OrganizationORM {
        throw new Error("Method not implemented.");
    }


}