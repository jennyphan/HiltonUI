import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { HotelService } from '../core/services/hotel.service';
import { APIS } from '../shared/constants';
import { Hotel, QueryHotels } from '../shared/models/hotels';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[];
  constructor(private hotelService: HotelService, private apollo: Apollo) {}

  ngOnInit() {
    this.getHotels();
  }

  getHotels(): void {
    this.apollo
      .use(APIS.HOTELAPI)
      .watchQuery<QueryHotels>({
        query: this.hotelService.hotelsQuery
      })
      .valueChanges.pipe(map(result => result.data.hotels))
      .subscribe(data => {
        this.hotels = data;
      });
  }
}
