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
      title: 'Zilla Order - Microservices E-commerce',
      img: '/assets/projects/zilla-order.png',
      backend: {
        description:
          'Distributed microservices architecture for order, product, and inventory management, each with independent databases and scalable deployment.',
      },
      frontend: {
        description:
          'Interface for managing products, placing orders, and viewing real-time inventory, with clean UX and Angular + Tailwind stack.',
      },
      differentials: [
        'MongoDB (Product), PostgreSQL (Order & Inventory)',
        'Dockerized microservices with Kubernetes-ready setup',
        'Scalable APIs with Spring Boot',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'MongoDB',
        'Docker',
        'Angular',
        'RxJS',
        'TailwindCSS',
      ],
      link: 'https://github.com/ipcm27/Zilla-Order',
    },
    {
      title: 'Summary AI - Internal Assistant with RAG',
      img: '/assets/projects/rag-model.webp',
      backend: {
        description:
          'RAG (Retrieval-Augmented Generation) assistant using vector databases for semantic search and OpenAI API to generate contextual responses.',
      },
      frontend: {
        description:
          'Simple chat interface to query internal documents with real-time answers and traceable source links.',
      },
      differentials: [
        'Langchain + OpenAI + FAISS for embeddings',
        'Document ingestion pipeline with Flask',
        'Minimal API usage by decoupling retrieval from generation',
      ],
      technologies: [
        'Python',
        'Flask',
        'FAISS',
        'Langchain',
        'OpenAI API',
        'Angular',
      ],
      link: 'https://github.com/ipcm27/Summary-AI',
    },
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
