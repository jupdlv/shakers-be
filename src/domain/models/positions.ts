import { Skill } from "@/domain/models/skills"
import { Specialities } from "@/domain/models/specialities"

export class Position {
    id: Number
    title: String
    skills: Skill[]
    specialities: Specialities[]

    constructor(
        id: Number,
        title: String,
        skills: Skill[],
        specialities: Specialities[]
    ) {
        this.id = id
        this.title = title
        this.skills = skills
        this.specialities = specialities
    }

}