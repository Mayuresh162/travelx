import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripTypeComponent } from './trip-type/trip-type.component';
import { BookingComponent } from './booking/booking.component';
import { SignupComponent } from './signup/signup.component';
import {TripdetailsComponent} from './tripdetails/tripdetails.component'
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/triptype', pathMatch: 'full' },
  { path: 'triptype', component: TripTypeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'tripdetails', component: TripdetailsComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'ticket', component: TicketComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
