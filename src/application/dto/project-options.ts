
export enum EOrderByPublishDate {
    "ASC" = 1,
    "DES" = -1
}

export interface IProjectOptionsDto {
    specialties?: Number[]
    skills?: Number[]
    categories?: Number[]
    industries?: Number[]
    orderByPublishDate?: EOrderByPublishDate
}
