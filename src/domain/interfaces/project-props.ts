import { EProjectStatus } from "@/domain/enum/project-status"
import { Budget } from "@/domain/models/budget"
import { Category } from "@/domain/models/categories"
import { Faq } from "@/domain/models/faqs"
import { Organization } from "@/domain/models/organizations"
import { Position } from "@/domain/models/positions"
import { SubCategory } from "@/domain/models/subcategories"
import { User } from "@/domain/models/user"

export interface IProjectProps {
    id?: Number
    title: String
    organization: Organization
    projectLeader: User
    category: Category
    subCategory: SubCategory
    startDate: Date
    budget: Budget
    totalHours: Number
    description: String
    goals: string[]
    faqs: Faq[]
    status: EProjectStatus
    creationDate: Date
    positions: Position[]
    totalApplicationsAmount: Number
    publishedAt: Date
}