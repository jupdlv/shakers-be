import { Specialties } from "@/domain/models/specialities";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SpecialtyUseCases {

    constructor() {
    }

    public async getAllCategories(): Promise<Specialties[] | undefined>{
        return undefined
    }

}