import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.scroll$.subscribe(() => {
      this.navigateToSkills();
    });
  }

  navigateToSkills() {
    this.navigationService.scrollToSkills();
  }

  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('href', 'assets/Files/Cv-Igor-Pierre-RED.pdf');
    link.setAttribute('download', 'Cv-Igor-Pierre-RED.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
