import { MapperOrmDomain } from "@/application/mapper/mapper.app";
import { Specialties } from "@/domain/models/specialities";
import { SpecialtiesORM } from "@/infrastructure/db/mongo/models/specialties";

export class SpecialtiesMapper implements MapperOrmDomain<SpecialtiesORM | Number, Specialties> {
    fromOrmToDomain(entity: Number | SpecialtiesORM): Specialties {
        const id = (entity instanceof SpecialtiesORM) ? entity.id : entity
        const name = (entity instanceof SpecialtiesORM) ? entity.name : undefined
        return new Specialties(id, name)
    }
    fromDomainToOrm(entity: Specialties): Number | SpecialtiesORM {
        throw new Error("Method not implemented.");
    }

}