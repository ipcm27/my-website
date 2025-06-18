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
          'Distributed microservices for order, product and inventory management. Each service has its own database, publishes domain events via Kafka and is hardened with Resilience4j for retries, circuit-breakers and rate-limiting. Observability via Logstash + Kibana and containerised deployment (Docker / Kubernetes).',
      },

      frontend: {
        description:
          'Lightweight Angular dashboard for basic product and order flows; focus remains on robust back-end services.',
      },

      differentials: [
        'Kafka event-driven communication',
        'Resilience4j fault-tolerance (circuit-breaker, retries)',
        'MongoDB (Product) + PostgreSQL (Order & Inventory)',
        'Containerised with Docker; Helm-ready Kubernetes manifests',
        'Centralised logging/metrics with Logstash + Kibana',
        'Scalable REST APIs built with Spring Boot',
      ],

      technologies: [
        'Java',
        'Spring Boot',
        'Kafka',
        'Resilience4j',
        'PostgreSQL',
        'MongoDB',
        'Docker',
        'Kubernetes',
        'Logstash',
        'Kibana',
        'Angular',
      ],

      link: 'https://github.com/ipcm27/Zilla-Order',
    },
    {
      title: 'Fetch & Flex - AI Agent with RAG',
      img: '/assets/projects/rag-model.webp',
      backend: {
        description:
          'AI agent combining Retrieval-Augmented Generation (RAG) with a vector database for semantic search, using Langchain and OpenAI APIs to generate contextual answers from internal documents.',
      },
      frontend: {
        description:
          'Clean and responsive chat interface to ask questions and receive AI-generated answers with source highlighting and tool-triggered actions.',
      },
      differentials: [
        'Langchain-based agent with custom tools and memory',
        'Semantic search using vector DB (Chroma/FAISS)',
        'Document ingestion pipeline with PDF/Markdown support',
        'Minimal API usage: retrieval and generation are decoupled',
        'Agent capable of summarizing, saving or exporting answers',
      ],
      technologies: [
        'Python',
        'Flask',
        'Langchain',
        'Chroma / FAISS',
        'OpenAI API',
        'Angular',
      ],
      link: 'https://github.com/ipcm27/fetch-flex-rag-ai-agent',
    },
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
