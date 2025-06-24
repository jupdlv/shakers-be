import { MapperOrmDomain } from "@/application/mapper/mapper.app";
import { SubCategory } from "@/domain/models/subcategories";
import { SubCategoryORM } from "@/infrastructure/db/mongo/models/subcategories";

export class SubCategoryMapper implements MapperOrmDomain<SubCategoryORM | Number, SubCategory> {
    fromOrmToDomain(entity: Number | SubCategoryORM): SubCategory {
        const id = (entity instanceof SubCategoryORM) ? entity.id : entity
        const name = (entity instanceof SubCategoryORM) ? entity.name : undefined
        return new SubCategory(id, name)
    }
    fromDomainToOrm(entity: SubCategory): Number | SubCategoryORM {
        throw new Error("Method not implemented.");
    }


} 