import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { ReservationService } from '../core/services/reservation.service';
import { APIS } from '../shared/constants';
import { Reservation } from '../shared/models/reservation';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private apollo: Apollo
  ) {}

  reservationId: number = null;
  reservation: Reservation;

  ngOnInit(): void {
    this.getReservation();
  }

  getReservation(): void {
    this.reservationId = +this.route.snapshot.paramMap.get('id');

    this.apollo
      .use(APIS.RESERVATIONAPI)
      .watchQuery({
        query: this.reservationService.getReservationQuery,
        variables: {
          id: this.reservationId
        },
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(map((result: any) => result.data.reservation))
      .subscribe(data => {
        this.reservation = data;
      });
  }
}
