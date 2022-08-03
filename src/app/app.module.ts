import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';

const misRutas: Routes = [
  // {path: 'home', component:HomeComponent}
  { path: 'landing', component: LandingComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DogsComponent,
    AboutUsComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
