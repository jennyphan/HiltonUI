import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';

@NgModule({
  declarations: [ReservationsComponent],
  imports: [CommonModule, ReservationsRoutingModule]
})
export class ReservationsModule {}
