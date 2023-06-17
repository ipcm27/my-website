import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{



  constructor(private navigationService:NavigationService) {}

  ngOnInit() {

    this.navigationService.scroll$.subscribe(() => {
      this.navigateToSkills()
    });

  }

  navigateToSkills() {
    this.navigationService.scrollToSkills()
  }

}
