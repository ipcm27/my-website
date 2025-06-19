import { Component } from '@angular/core';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career/career.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, PersonalProjectsComponent, AboutMeComponent, CareerComponent, HeroComponent, SkillsComponent, AboutMeComponent, FooterComponent, ContactMeComponent],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
