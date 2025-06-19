import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(
    private navigationService: NavigationService,
    private cvService: CvService
  ) {}

  ngOnInit() {
    this.navigationService.scroll$.subscribe(() => {
      this.navigateToSkills();
    });
  }

  navigateToSkills() {
    this.navigationService.scrollToSkills();
  }

  downloadCV() {
    this.cvService.downloadCV();
  }
}
