import { Skill } from "@/domain/models/skills";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SkillUseCases {

    constructor() {
    }

    public async getAllCategories(): Promise<Skill[] | undefined>{
        return 
    }

}