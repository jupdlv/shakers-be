export interface IStaticRepository<T> {

    getAll(): Promise<T[]>

} 