import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {
  selectedRoleId: number = 0;
  roles = [
    {
      id: 5,
      company: 'Groupe BPCE - Natixis',
      title: 'Fullstack Developer',
      time: 'Mai 2023 - Now',
      text:
          "As a Fullstack Developer at Natixis, I play a critical role in developing and maintaining a sophisticated risk monitoring and Value at Risk (VaR) calculation application. This platform is essential for assessing and managing financial risk, ensuring the bank's robust compliance with regulatory standards.\n\n" +
          "In my role, I leverage my expertise in Java and Spring to build and optimize backend services that handle complex data processing and analysis. The frontend, developed with modern JavaScript frameworks, provides an intuitive interface for end-users to interact with and interpret risk data effectively.\n\n",
      keyAchievements: "- **MVP Launch:** Contributed to the successful launch of a new MVP (Minimum Viable Product) with enhanced VaR calculation capabilities, improving risk assessment precision.\n\n" +
                      "- **Quality Assurance:** Prioritized unit testing with JUnit and Mockito for backend services, and Karma and Jasmine for frontend components, ensuring high-quality software delivery.\n\n" +
                      "- **Collaborative Development:** Worked closely with cross-functional and multicultural teams, applying modern development practices to deliver solutions that meet and exceed client expectations.\n\n"
    },
    {
      id: 4,
      company: 'Cell C Telecom',
      title: 'Fullstack Developer',
      time: 'Oct 2022 - Mai 2023',
      text:
        'As a Fullstack Developer, I worked as an external consultant at Cell C - one of the largest telecom companies in South Africa.\n\n' +
        'I developed Java/Spring-based applications designed for a SOA environment and orchestrated with a cloud environment. Notably, I developed a scalable microservice that generated scheduled reports and handled large volumes of data using microservices and SOA architecture.\n\n' +
        'I prioritize unit testing in both the backend using JUnit and Mockito, and in the frontend using Karma and Jasmine. My approach ensures high-quality software and a better end-user experience.\n\n' +
        "Overall, I'm passionate about working with multicultural teams and applying modern development practices to deliver high-quality solutions that meet and exceed client expectations.\n\n",
    },
    {
      id: 3,
      company: 'Reachr',
      title: 'Front-end Developer',
      time: 'Dez 2021 - Dez 2022',
      text:
        'As a frontend developer, I worked on the development and maintenance of single-page applications using Angular 8+, Typescript, JavaScript, CSS, HTML, and Bootstrap, among other libraries and frameworks.\n\n' +
        "In one of my recent projects, I was part of a team responsible for upgrading a legacy AngularJS codebase to the latest version of Angular (version 15). Throughout this project, I utilized my expertise in RXJS and integrated various frameworks, including Jquery and NgZoro, to enhance the application's functionality.\n\n" +
        'I also contributed to the development of ecommerce features, optimizing the purchasing flow and designing user interfaces that maximized the end-user experience.\n\n' +
        'Overall, my experience in frontend development has allowed me to work with a wide range of technologies and frameworks, including Scrum, Kanban, cloud ecosystems like Azure, and NoSQL databases such as CosmoDB.\n\n',
    },
    {
      id: 2,
      company: 'Freelancer',
      title: 'Developer',
      time: 'Nov 2020 - Dez 2021',
      text:
        'Development of functionalities for the tax administration system responsible for registering and monitoring the National Register of Legal Entities. Here I use Batch Jobs for data processing, SOAP web Server in communication with the Federal Revenue (national agency, superior) and Boards of Trade (municipal agencies, inferior).\n\n' +
        'I also have designed visually appealing and responsive user interfaces for maximum user engagement using HTML, CSS, JavaScript, and Angular.',
    },
    {
      id: 1,
      company: 'Santander Bank',
      title: 'Business Manager',
      time: 'Aug 2016 - Jan 2020',
      text:
        'Development of functionalities for the tax administration system responsible for registering and monitoring the National Register of Legal Entities. Here I use Batch Jobs for data processing, SOAP web Server in communication with the Federal Revenue (national agency, superior) and Boards of Trade (municipal agencies, inferior).\n\n' +
        'I also have designed visually appealing and responsive user interfaces for maximum user engagement using HTML, CSS, JavaScript, and Angular.',
    },
  ];

  ngOnInit(): void {
    this.selectedRoleId = 5;
  }

  selectRole(roleId: number) {
    this.selectedRoleId = roleId;
  }
}
