import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { ReservationService } from '../core/services/reservation.service';
import { AlertService } from '../shared/alert/alert.service';
import { APIS } from '../shared/constants';
import { Reservation } from '../shared/models/reservation';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.scss']
})
export class ReservationAddComponent implements OnInit {
  public name: FormControl;
  public hotelName: FormControl;
  public range: FormControl;

  public SUCCESS_MSG = 'Reservation created successfully';
  public ERROR_MSG = 'Error creating reservation';
  public ERROR_FORM_MSG = 'Please check form errors';

  reservationForm: FormGroup;
  reservation: Reservation;

  minDate = new Date();

  constructor(
    private alertService: AlertService,
    fb: FormBuilder,
    private apollo: Apollo,
    private reservationService: ReservationService
  ) {}

  ngOnInit() {
    this.minDate.setDate(this.minDate.getDate());
    this.createFormControls();
    this.createFormGroup();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.hotelName = new FormControl('', Validators.required);
    this.range = new FormControl('', [Validators.required]);
  }

  clearForm() {
    this.alertService.clearMessage();
    this.reservationForm.reset();
  }

  createFormGroup() {
    this.reservationForm = new FormGroup({
      name: this.name,
      hotelName: this.hotelName,
      range: this.range
    });
  }

  formatDate(dateToFormat: Date): string {
    const formattedDate = dateToFormat
      ? dateToFormat.getMonth() +
        1 +
        '/' +
        dateToFormat.getDate() +
        '/' +
        dateToFormat.getFullYear()
      : null;
    return formattedDate;
  }

  createNewReservation(): Reservation {
    const newReservation: Reservation = {
      name: this.reservationForm.get('name').value,
      hotelName: this.reservationForm.get('hotelName').value,
      arrivalDate: this.formatDate(this.reservationForm.value.range[0]),
      departureDate: this.formatDate(this.reservationForm.value.range[1])
    };
    return newReservation;
  }
  createReservation() {
    if (this.reservationForm.invalid) {
      this.alertService.error(this.ERROR_FORM_MSG);
      return;
    }

    const newReservation = this.createNewReservation();

    this.apollo
      .use(APIS.RESERVATIONAPI)
      .mutate({
        mutation: this.reservationService.addReservationQuery,
        variables: {
          input: newReservation
        }
      })
      .subscribe(
        data => {
          this.alertService.success(this.SUCCESS_MSG);
        },
        error => {
          this.alertService.error(this.ERROR_MSG);
        }
      );
  }
}
