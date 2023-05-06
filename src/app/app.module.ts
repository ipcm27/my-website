import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CasesComponent } from './cases/cases.component';
import { ProfileComponent } from './home/profile/profile.component';
import { SkillsComponent } from './home/skills/skills.component';
import { HeroComponent } from './home/hero/hero.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { CarrerComponent } from './home/carrer/carrer.component';
import { RecomendationsComponent } from './home/recomendations/recomendations.component';
import { ContactMeComponent } from './home/contact-me/contact-me.component';
import { GradientComponent } from './gradient/gradient.component';
import { PersonalProjectsComponent } from './home/personal-projects/personal-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CasesComponent,
    ProfileComponent,
    SkillsComponent,
    HeroComponent,
    AboutMeComponent,
    CarrerComponent,
    RecomendationsComponent,
    ContactMeComponent,
    GradientComponent,
    PersonalProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
