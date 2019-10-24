import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../components/login/login.component';
import { HowToComponent } from '../components/how-to/how-to.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
// import { UserControllerService } from '../services/api/user-controller.service';
// import { MapsControllerService } from '../services/api/maps-controller.service';
// import { MatchingControllerService } from '../services/api/matching-controller.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { FavoritesComponent } from '../components/favorites/favorites.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ViewProfileComponent } from '../components/view-profile/view-profile.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ViewUsersComponent } from '../components/view-users/view-users.component';
import { SearchUsersComponent } from '../components/search-users/search-users.component';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';
import { RegisterComponent } from '../components/register/register.component';

@NgModule({
  declarations: [
    HowToComponent,
    RegisterComponent,
    ViewProfileComponent,
    SearchUsersComponent,
    ViewUsersComponent,
    ImageUploadComponent
    // DateFormatPipe,
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    AnimateOnScrollModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxGFZzCVmm1PxV8C0KvG6EG6Tt3S_HeXw',
      libraries: ['places'],
    }),
    NgbModule,
    HttpClientModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxSpinnerModule
  ],
  providers: [
    NgbActiveModal,
    // MapsControllerService,
    // UserControllerService,
    // AuthService,
    // MatchingControllerService,
    GoogleMapsAPIWrapper
  ],
  bootstrap: [LoginComponent]
})
export class FirstModule { }
