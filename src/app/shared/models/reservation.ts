export class Reservation {
  id?: number;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

export class QueryReservations {
  reservations: Reservation[];
}
