import { MapperOrmDomain } from "@/application/mapper/mapper.app";
import { Industry } from "@/domain/models/industry";
import { IndustriesORM } from "@/infrastructure/db/mongo/models/industries";

export class IndustryMapper implements MapperOrmDomain<IndustriesORM | Number, Industry> {
    fromOrmToDomain(entity: IndustriesORM | Number): Industry {
        const id = (entity instanceof IndustriesORM) ? entity.id : entity
        const name = (entity instanceof IndustriesORM) ? entity.name : undefined
        return new Industry(id, name)
    }
    fromDomainToOrm(entity: Industry| Number): IndustriesORM {
        throw new Error("Method not implemented.");
    }

}