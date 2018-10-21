import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PackagesComponent } from './components/packages/packages.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TeamSliderComponent } from './components/team-slider/team-slider.component';
import { SliderComponent } from './components/slider/slider.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LocationStrategy, PathLocationStrategy } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    NavbarComponent,
    ContactFormComponent,
    PackagesComponent,
    ProjectsComponent,
    TestimonialsComponent,
    TeamSliderComponent,
    SliderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
