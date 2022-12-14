import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

const misRutas: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'pet/:id', component: PetDetailComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DogsComponent,
    AboutUsComponent,
    ContactComponent,
    ErrorComponent,
    PetDetailComponent,
    SearchFilterPipe,
  ],
  imports: [BrowserModule, RouterModule.forRoot(misRutas), HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
