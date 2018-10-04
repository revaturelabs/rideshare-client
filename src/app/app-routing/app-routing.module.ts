import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HowToComponent } from '../components/how-to/how-to.component';
import { LandingComponent } from '../components/landing/landing.component';
import { LoginComponent } from '../components/login/login.component';
import { MapComponent } from '../components/map/map.component';
import { RideswipeComponent } from '../components/rideswipe/rideswipe.component';
import { UsercardComponent } from '../components/usercard/usercard.component';
import { FavoritesComponent } from '../components/favorites/favorites.component';
import { AccountinfoComponent } from '../components/accountinfo/accountinfo.component';
import { AdminComponent } from '../components/admin/admin.component';
import { CarRegistrationComponent } from '../components/car-registration/car-registration.component';

export const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: 'howTo', component: HowToComponent },
  { path: 'landing', component: LandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'accountInfo', component: AccountinfoComponent},
  { path: 'rideswipe', component: RideswipeComponent },
  { path: 'userCard', component: UsercardComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'cars', component: CarRegistrationComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
