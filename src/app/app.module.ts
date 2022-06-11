import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './payment-details/shared/store/payment.reducer';
import { PaymentService } from './payment-details/shared/services/payment.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {aboutUsComponent} from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    HomeComponent,
    aboutUsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('details', reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
