import { Category } from "@/domain/models/categories";
import { Industries } from "@/domain/models/industries";
import { Skills } from "@/domain/models/skills";
import { Specialities } from "@/domain/models/specialties";

enum orderDirection {
    "asc",
    "desc"
}
export interface IProjectOptions {
    especialties: [Specialities]
    skills: [Skills]
    categories: [Category]
    industries: [Industries]
    orderByPublishDate: orderDirection
}