import { Prop } from "@nestjs/mongoose"

export class OrganizationORM {
    id: number
    name: string
    logo: string
    @Prop({ type: Number, ref: 'industries' })
    industriy: number
}