import { MapperOrmDomain } from "@/application/mapper/mapper.app";
import { Skill } from "@/domain/models/skills";
import { SkillsORM } from "@/infrastructure/db/mongo/models/skills";

export class SkillMapper implements MapperOrmDomain<SkillsORM | Number, Skill> {
    fromOrmToDomain(entity: Number | SkillsORM): Skill {
        const id = (entity instanceof SkillsORM) ? entity._id : entity
        const name = (entity instanceof SkillsORM) ? entity.name : undefined
        return new Skill(id, name)
    }
    fromDomainToOrm(entity: Skill): Number | SkillsORM {
        throw new Error("Method not implemented.");
    }

}