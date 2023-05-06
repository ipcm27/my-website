import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css'],
})
export class CarrerComponent implements OnInit {
  selectedRoleId: number = 0;
  roles = [
    {
      id: 1,
      company: 'Adentis Portugal',
      title: 'Fullstack Developer',
      time: 'Oct 2021 - Now',
      text:
        'As a Fullstack Developer, I worked as an External consultant in a company called Vas-x/Cell C - one of the largest telecom companies in South Africa.\n\n' +
        'I developed Java/Spring-based applications designed for a SOA environment and orchestrated with a cloud environment. Notably, I developed a scalable microservice that generated scheduled reports and handled large volumes of data using microservices and SOA architecture.\n\n' +
        'I prioritize unit testing in both the backend using JUnit and Mockito, and in the frontend using Karma and Jasmine. My approach ensures high-quality software and a better end-user experience.\n\n' +
        "Overall, I'm passionate about working with multicultural teams and applying modern development practices to deliver high-quality solutions that meet and exceed client expectations.\n\n",
    },
    {
      id: 2,
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
      id: 3,
      company: 'Freelancer',
      title: 'Developer',
      time: 'Nov 2020 - Dez 2021',
      text:
        'Development of functionalities for the tax administration system responsible for registering and monitoring the National Register of Legal Entities. Here I use Batch Jobs for data processing, SOAP web Server in communication with the Federal Revenue (national agency, superior) and Boards of Trade (municipal agencies, inferior).\n\n' +
        'I also have designed visually appealing and responsive user interfaces for maximum user engagement using HTML, CSS, JavaScript, and Angular.',
    },
    {
      id: 4,
      company: 'Santander Bank',
      title: 'Business Manager',
      time: 'Aug 2016 - Jan 2020',
      text:
        'Development of functionalities for the tax administration system responsible for registering and monitoring the National Register of Legal Entities. Here I use Batch Jobs for data processing, SOAP web Server in communication with the Federal Revenue (national agency, superior) and Boards of Trade (municipal agencies, inferior).\n\n' +
        'I also have designed visually appealing and responsive user interfaces for maximum user engagement using HTML, CSS, JavaScript, and Angular.',
    },
  ];

  ngOnInit(): void {
    this.selectedRoleId = 1;
  }

  selectRole(roleId: number) {
    this.selectedRoleId = roleId;
  }
}
