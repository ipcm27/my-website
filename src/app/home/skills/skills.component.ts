import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit{
  Skills = ['Java 8', 'JavaScript','TypeScript', 'HTML', 'CSS', 'SQL'];
  Frameworks = [
    'Angular',
    'Spring',
    'Bootstrap',
    'Material',
    'Git and Gitflow',
    'Scrum and Agile',
    'RxJS',
    'Azure cloud',
    'Docker and Kubernetes',
    'MySql, Oracle and Postgres',
    'MongoDb',
    'JUnit, Karma and Jasmine',
    'REST & SOAP',
    'Apache Tomcat and Glassfish',
    'CI/CD',
    'MIcroservices and SOA',
  ];
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.scroll$.subscribe(() => {
      this.scrollToSection();
    });
  }

  scrollToSection(): void {
    const skillsElement = document.getElementById('skills');
    skillsElement?.scrollIntoView({ behavior: 'smooth' });
  }

}
