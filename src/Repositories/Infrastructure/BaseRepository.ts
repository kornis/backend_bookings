export interface BaseRepository<T> {
    findAll(): Promise<T[]>

    findOne( id: number ): Promise<T>

    create( entity: T ): Promise<T>
}