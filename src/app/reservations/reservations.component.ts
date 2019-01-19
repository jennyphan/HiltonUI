import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { ReservationService } from '../core/services/reservation.service';
import { APIS } from '../shared/constants';
import { QueryReservations, Reservation } from '../shared/models/reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[];
  constructor(
    private reservationService: ReservationService,
    private apollo: Apollo
  ) {}

  ngOnInit() {
    this.getReservations();
  }

  getReservations(): void {
    this.apollo
      .use(APIS.RESERVATIONAPI)
      .watchQuery<QueryReservations>({
        query: this.reservationService.reservationsQuery
      })
      .valueChanges.pipe(map(result => result.data.reservations))
      .subscribe(data => {
        this.reservations = data;
      });
  }
}
