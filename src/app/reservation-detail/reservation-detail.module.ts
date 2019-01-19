import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReservationDetailRoutingModule } from './reservation-detail-routing.module';
import { ReservationDetailComponent } from './reservation-detail.component';

@NgModule({
  declarations: [ReservationDetailComponent],
  imports: [CommonModule, ReservationDetailRoutingModule]
})
export class ReservationDetailModule {}
