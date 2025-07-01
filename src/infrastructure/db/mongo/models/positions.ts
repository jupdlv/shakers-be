import { SkillsORM } from "@/infrastructure/db/mongo/models/skills"
import { SpecialtiesORM } from "@/infrastructure/db/mongo/models/specialties"
import { Prop } from "@nestjs/mongoose"

export class PositionORM {
    id: Number
    title: String
    @Prop({ type: [Number], ref: 'skills' })
    skills: SkillsORM[] | Number[]
    @Prop({ type: [Number], ref: 'specialties' })
    specialties: SpecialtiesORM[] | Number[]
    referralBonus: Number
}