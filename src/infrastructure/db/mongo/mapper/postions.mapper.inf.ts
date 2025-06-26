import { MapperOrmDomain } from "@/application/mapper/mapper.app";
import { Position } from "@/domain/models/positions";
import { SkillMapper } from "@/infrastructure/db/mongo/mapper/skill.mapper.inf";
import { SpecialtiesMapper } from "@/infrastructure/db/mongo/mapper/specialities.mapper.inf";
import { PositionORM } from "@/infrastructure/db/mongo/models/positions";

export class PositionMapper implements MapperOrmDomain<PositionORM, Position>{
    fromOrmToDomain(entity: PositionORM): Position {
        const skills = entity.skills.map(skill => new SkillMapper().fromOrmToDomain(skill))
        const specialties = entity.specialties.map(speciality => new SpecialtiesMapper().fromOrmToDomain(speciality))
        return new Position(entity.id, entity.title, skills, specialties)
    }
    fromDomainToOrm(entity: Position): PositionORM {
        throw new Error("Method not implemented.");
    }

}