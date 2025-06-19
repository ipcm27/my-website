
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Role } from 'src/app/interfaces/roles';
import { CareerService } from 'src/app/services/career.service';

@Component({
    selector: 'app-career',
    templateUrl: './career.component.html',
    imports: [],
    styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  @Input()
  cardIndex!: number;

  selectedRoleId: number = 0;
  totalExperience: string = '';
  roles: Array<Role> = []

  constructor(private careerService: CareerService) {}

  ngOnInit(): void {
    this.selectedRoleId = 5;
    this.calculateExperience();
        this.careerService.getRoles().subscribe(
          (roles) => {
            this.roles = roles;
          }
        );
  }

  calculateExperience(): void {
    const startDate = moment('2021-06-01');
    const currentDate = moment();

    const duration = moment.duration(currentDate.diff(startDate));
    const years = duration.years();
    const months = duration.months();

    this.totalExperience = `${years} years and ${months} months`;
  }
  selectRole(roleId: number) {
    this.selectedRoleId = roleId;
  }
}
