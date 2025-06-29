import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './home/profile/profile.component';
import { SkillsComponent } from './home/skills/skills.component';
import { HeroComponent } from './home/hero/hero.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { CareerComponent } from './home/career/career.component';
import { GradientComponent } from './gradient/gradient.component';
import { PersonalProjectsComponent } from './home/personal-projects/personal-projects.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GradientComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,


    // Standalone components
    HomeComponent,
    PersonalProjectsComponent,
    SkillsComponent,
    HeroComponent,
    AboutMeComponent,
    CareerComponent,
    ProfileComponent,
  ],
  providers: [],
  schemas: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
