import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  constructor() {}

  hotelsQuery = gql`
    query hotels {
      hotels {
        name
        address
        city
        zip
      }
    }
  `;
}
