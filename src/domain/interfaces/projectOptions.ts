enum orderDirection {
    "asc",
    "desc"
}
export interface IProjectOptions {
    especialties?: Number[]
    skills?: Number[]
    categories?: Number[]
    industries?: Number[]
    orderByPublishDate?: orderDirection
}