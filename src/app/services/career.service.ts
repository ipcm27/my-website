import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Role } from '../interfaces/roles';

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  private roles: Role[] = [
    {
      id: 5,
      company: 'Groupe BPCE - Natixis',
      title: 'Fullstack Developer',
      time: 'May 2023 - Now',
      text:
        'As a Fullstack Developer at Natixis, I work on developing and maintaining a sophisticated risk monitoring and Value at Risk (VaR) calculation application. This platform is crucial for assessing and managing financial risk, ensuring that the bank stays compliant with regulatory standards.\n\n' +
        'In my role, I use my expertise in Java and Spring to build and optimize backend services that handle complex data processing and analysis. On the frontend, using modern Angular, I create an intuitive interface that allows end-users to easily interact with and understand the risk data',
      keyAchievements:
        '- **MVP Launch:** Contributed to the successful launch of a new MVP (Minimum Viable Product) with enhanced VaR calculation capabilities, improving risk assessment precision.\n\n' +
        '- **Quality Assurance:** Prioritized unit testing with JUnit and Mockito for backend services, and Karma and Jasmine for frontend components, ensuring high-quality software delivery.\n\n' +
        '- **Collaborative Development:** Worked closely with cross-functional and multicultural teams, applying modern development practices to deliver solutions that meet and exceed client expectations.\n\n',
    },
    {
      id: 4,
      company: 'Cell C Telecom',
      title: 'Fullstack Developer',
      time: 'Oct 2022 - May 2023',
      text:
        'As a Fullstack Developer, I worked as an external consultant at Cell C - one of the largest telecom companies in South Africa.\n\n' +
        'Most of the projects were centered around developing applications utilizing Java/Spring. One key highlight was the creation of a scalable microservice that generated scheduled reports and handled large volumes of data using SOA architecture.\n\n',
    },
    {
      id: 3,
      company: 'Reachr',
      title: 'Front-end Developer',
      time: 'Dec 2021 - May 2023',
      text:
        'As a frontend developer, I worked on the development and maintenance of single-page applications using Angular 8+, Typescript, JavaScript, CSS, HTML, and Bootstrap, among other libraries and frameworks.\n\n' +
        "One success case I can highlight is my involvement in a team responsible for upgrading the company's main application, which was originally built in AngularJS, to the latest version of Angular (version 15). The new application followed industry best practices and included complex flows, such as user authentication, reactive programming, purchase processes, and more.",
    },
    {
      id: 2,
      company: 'Freelancer',
      title: 'Freelancer Developer',
      time: 'Jun 2021 - Dez 2021',
      text: 'As a freelance web developer, I specialized in designing and developing custom landing pages using HTML, CSS, and Angular. My primary focus was on crafting visually appealing, responsive, and user-friendly websites that met the specific needs of my clients.',
    },
    {
      id: 1,
      company: 'Santander Bank',
      title: 'Business Manager',
      time: 'Aug 2016 - Jan 2020',
      text:
        'During my time at Santander Bank, I achieved rapid career progression, earning three promotions in three years, starting as an intern and advancing to Business Manager.\n\n' +
        'This experience provided me with a deep understanding of business operations, leadership, and strategic decision-making in a dynamic financial environment.',
    },
  ];

  getRoles(): Observable<any[]> {
    return of(this.roles);
  }
}
