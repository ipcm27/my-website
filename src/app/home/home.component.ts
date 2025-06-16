import { Component } from '@angular/core';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career/career.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, PersonalProjectsComponent, CareerComponent, HeroComponent, SkillsComponent, AboutMeComponent],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
