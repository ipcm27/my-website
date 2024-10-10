export interface Project {
  title: string;
  backend: {
    description: string;
    technologies: string[];
  };
  frontend: {
    description: string;
    technologies: string[];
  };
  differentials: string[];
  technologies: string[];
}
