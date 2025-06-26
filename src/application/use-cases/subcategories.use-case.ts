import { SubCategory } from "@/domain/models/subcategories";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SubCategoryUseCases {

    constructor() {
    }

    public async getAllCategories(): Promise<SubCategory[] | undefined >{
        return undefined
    }

}