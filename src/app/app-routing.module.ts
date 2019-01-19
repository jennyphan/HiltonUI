import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'viewReservation/:id',
    loadChildren:
      './reservation-detail/reservation-detail.module#ReservationDetailModule'
  },
  {
    path: 'reservations',
    loadChildren: './reservations/reservations.module#ReservationsModule'
  },
  {
    path: 'addReservation',
    loadChildren:
      './reservation-add/reservation-add.module#ReservationAddModule'
  },
  {
    path: 'hotels',
    loadChildren: './hotels/hotels.module#HotelsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
