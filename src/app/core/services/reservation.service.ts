import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor() {}

  addReservationQuery = gql`
    mutation addReservation($input: ReservationInput!) {
      addReservation(input: $input) {
        id
        name
        hotelName
        arrivalDate
        departureDate
      }
    }
  `;

  reservationsQuery = gql`
    query reservations {
      reservations {
        id
        name
        hotelName
        arrivalDate
        departureDate
      }
    }
  `;

  getReservationQuery = gql`
    query reservation($id: Int!) {
      reservation(id: $id) {
        id
        name
        hotelName
        arrivalDate
        departureDate
      }
    }
  `;
}
