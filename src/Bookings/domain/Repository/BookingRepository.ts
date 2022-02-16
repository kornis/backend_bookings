import Booking from '../Entities/Booking';

export default interface BookingRepository {

    getAll(): Promise<Booking[]>;

    getOne(id: number): Promise<Booking>;
}