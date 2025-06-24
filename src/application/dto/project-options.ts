
enum EOrder {
    "ASC" = 1,
    "DES" = -1
}

export interface IProjectOptionsDto {
    especialties?: Number[]
    skills?: Number[]
    categories?: Number[]
    industries?: Number[]
    orderByPublishDate?: EOrder
}
