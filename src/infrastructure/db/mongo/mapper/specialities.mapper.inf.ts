import { MapperOrmDomain } from "@/application/mapper/mapper.app";
import { Specialities } from "@/domain/models/specialities";
import { SpecialtiesORM } from "@/infrastructure/db/mongo/models/specialties";

export class SpecialtiesMapper implements MapperOrmDomain<SpecialtiesORM | Number, Specialities> {
    fromOrmToDomain(entity: Number | SpecialtiesORM): Specialities {
        const id = (entity instanceof SpecialtiesORM) ? entity.id : entity
        const name = (entity instanceof SpecialtiesORM) ? entity.name : undefined
        return new Specialities(id, name)
    }
    fromDomainToOrm(entity: Specialities): Number | SpecialtiesORM {
        throw new Error("Method not implemented.");
    }

}