import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/projects';
import {ProjectService} from "src/app/services/project.service"

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent {
    Projects: Project[] = []

    responsiveOptions: any[] | undefined;

    constructor(private ProjectService: ProjectService) {}

    ngOnInit() {
        this.ProjectService.getProjects().subscribe((Projects: Array<Project>) => {
            this.Projects = Projects;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

}
