import Booking from '../Entities/Booking';

export interface BookingRepository {

    getAll(): Promise<Booking[]>;

    getOne(id: number): Promise<Booking>;
}