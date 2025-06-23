import { EProjectStatus } from "@/domain/enum/projectStatus"
import { IProjectProps } from "@/domain/interfaces/projectProps"
import { Budget } from "@/domain/models/budget"
import { Category } from "@/domain/models/categories"
import { Faq } from "@/domain/models/faqs"
import { Organization } from "@/domain/models/organizations"
import { Position } from "@/domain/models/positions"
import { SubCategory } from "@/domain/models/subcategories"
import { User } from "@/domain/models/user"


export class Project {
    private name: string
    private title: string
    private organization: Organization
    private projectLeader: User
    private category: Category
    private subCategory: SubCategory
    private startDate: Date
    private budget: Budget
    private totalHours: number
    private description: string
    private goals: string[]
    private faqs: Faq[]
    private status: EProjectStatus
    private creationDate: Date
    private positions: Position[]
    private totalApplicationsAmount:number
    private publishedAt: Date
    
    constructor(projectProps: IProjectProps){
        Object.assign(this, projectProps)
    }
}