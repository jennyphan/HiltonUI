import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AlertService } from './shared/alert/alert.service';
import { APIS } from './shared/constants';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // Reservations API

    apollo.create(
      {
        link: httpLink.create({ uri: environment.reservationAPI }),
        cache: new InMemoryCache()
      },
      APIS.RESERVATIONAPI
    );
    // Hotel API
    apollo.create(
      {
        link: httpLink.create({ uri: environment.hotelAPI }),
        cache: new InMemoryCache()
      },
      APIS.HOTELAPI
    );
  }
}
