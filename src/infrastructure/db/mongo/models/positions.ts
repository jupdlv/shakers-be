import { SkillsORM } from "@/infrastructure/db/mongo/models/skills"
import { SpecialtiesORM } from "@/infrastructure/db/mongo/models/specialties"

export class PositionORM{
    id: Number
    title: String
    skills: SkillsORM[]
    specialties: SpecialtiesORM[]
    referralBonus: Number
}