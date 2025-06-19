import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() cardIndex!: number;

  // ── Coding languages ──────────────────────────────────────────────
  skills: string[] = [
    'Java 8+',
    'JavaScript',
    'TypeScript',
    'Python (basic)',
    'SQL',
    'HTML',
    'CSS',
  ];

  // ── Frameworks / Tools / Systems ──────────────────────────────────
  frameworks: string[] = [
    'Spring Boot',
    'Angular 12+ / AngularJS',
    'SQL & NoSQL Databases',
    'Scrum & Agile',
    'JUnit • Mockito • Karma • Jasmine',
    'RAG / LLM integration',
    'RxJS & NgRx',
    'Bootstrap / Material UI',
    'Docker & Kubernetes',
    'Git & GitFlow',
    'CI/CD pipelines',
    'Microservices',
  ];

  // ── Languages (spoken) ────────────────────────────────────────────
  spoken: string[] = [
    'Portuguese – Native',
    'English – Fluent',
    'Spanish – B2',
    'French – Beginner',
  ];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.scroll$.subscribe(() => this.scrollToSection());
  }

  private scrollToSection(): void {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  }
}
