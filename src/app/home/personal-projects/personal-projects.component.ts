import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Project } from 'src/app/interfaces/projects';
import {ProjectService} from "src/app/services/project.service"

@Component({
    selector: 'app-personal-projects',
    imports: [CommonModule, CarouselModule, ButtonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './personal-projects.component.html',
    styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent {
  @Input()
  cardIndex!: number;

  projects: Project[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private ProjectService: ProjectService) {}

  ngOnInit() {
    this.ProjectService.getProjects().subscribe((Projects: Array<Project>) => {
      this.projects = Projects;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  chunkArray(technologies: string[], chunkSize: number): string[][] {
    const result = [];
    for (let i = 0; i < technologies.length; i += chunkSize) {
      result.push(technologies.slice(i, i + chunkSize));
    }
    return result;
  }
}
