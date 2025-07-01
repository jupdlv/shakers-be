import { MapperOrmDomain } from "@/application/mapper/mapper.app";
import { Category } from "@/domain/models/categories";
import { CategoryORM } from "@/infrastructure/db/mongo/models/categories";

export class CategoryMapper implements MapperOrmDomain<CategoryORM | Number, Category> {
    fromOrmToDomain(entity: CategoryORM | Number): Category {
        const id = (entity instanceof CategoryORM) ? entity._id : entity
        const name = (entity instanceof CategoryORM) ? entity.name : undefined
        return new Category(id, name)
    }
    fromDomainToOrm(entity: Category ): CategoryORM | Number {
        throw new Error("Method not implemented.");
    }

}