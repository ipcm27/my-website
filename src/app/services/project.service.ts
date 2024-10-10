// project.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from "../interfaces/projects"

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'Barbershop Management System',
      backend: {
        description:
          'Management of appointments, clients, services, and professionals.',
        technologies: [
          'Java',
          'Spring Boot',
          'JPA/Hibernate',
          'PostgreSQL/MySQL',
        ],
      },
      frontend: {
        description:
          'Dashboard for clients and employees to view available times, schedule services, and check history.',
        technologies: ['Angular', 'TypeScript', 'Angular Material'],
      },
      differentials: [
        'JWT for authentication',
        'Real-time notifications with WebSockets',
        'Deployment with Docker and Kubernetes',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'JPA/Hibernate',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
        'Angular',
      ],
    },
    {
      title: 'Package Tracking System',
      backend: {
        description: 'Integration with logistics APIs for real-time tracking.',
        technologies: ['Java', 'Spring Boot', 'Redis', 'Kafka'],
      },
      frontend: {
        description:
          'User-friendly interface for entering tracking codes and monitoring packages.',
        technologies: ['Angular', 'RxJS', 'TypeScript', 'Google Maps API'],
      },
      differentials: [
        'Caching with Redis',
        'Kafka for real-time event processing',
        'Map location visualization',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Redis',
        'Kafka',
        'Angular',
        'RxJS',
        'Google Maps API',
      ],
    },
    {
      title: 'Book Recommendation System Using AI',
      backend: {
        description:
          'Integration with OpenAI for book recommendations and using MongoDB for user data storage.',
        technologies: ['Java', 'Spring Boot', 'MongoDB', 'OpenAI API'],
      },
      frontend: {
        description:
          'Interface for users to input their favorite books and view recommendations.',
        technologies: ['Angular', 'TypeScript', 'Angular Material'],
      },
      differentials: [
        'Integration with OpenAI',
        'Using MongoDB for flexibility',
        'Scalable system for large data volumes',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'MongoDB',
        'OpenAI API',
        'Angular',
        'TypeScript',
      ],
    },
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
