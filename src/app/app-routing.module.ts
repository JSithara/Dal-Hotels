import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AvailableRoomComponent } from './available-room/available-room.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { BookingRecordsComponent } from './booking-records/booking-records.component';
import { SearchPageComponent } from './search-page/search-page.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'avaliable', component: AvailableRoomComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'bookings/:id', component: BookingsComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactUsComponent},
  {path: 'room-detail', component: HotelDetailsComponent},
  {path: 'booking-record', component: BookingRecordsComponent, canActivate: [AuthGuard]},
  {path: 'search', component: SearchPageComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
