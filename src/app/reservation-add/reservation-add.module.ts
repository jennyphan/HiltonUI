import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertComponent } from '../shared/alert/alert.component';
import { AlertService } from '../shared/alert/alert.service';
import { ReservationAddRoutingModule } from './reservation-add-routing.module';
import { ReservationAddComponent } from './reservation-add.component';

@NgModule({
  declarations: [ReservationAddComponent, AlertComponent],
  imports: [
    BsDatepickerModule.forRoot(),
    CommonModule,
    ReservationAddRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlertService]
})
export class ReservationAddModule {}
