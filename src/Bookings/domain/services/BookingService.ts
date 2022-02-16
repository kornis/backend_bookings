import { BookingRepository } from "../Repository/BookingRepository";
import Booking from "../Entities/Booking";

export class BookingService {

    constructor( private db: BookingRepository ){ }
}