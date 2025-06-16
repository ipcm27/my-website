import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css'],
})
export class GradientComponent {
  @ViewChild('gradient', { static: true })
  gradientRef!: ElementRef;
  dance: boolean = true;
  intervalId: any;

  constructor() {}

  ngOnInit(): void {
   // this.gradientDance();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.dance = false;
  }

  gradientDance(): void {
    const gradient = this.gradientRef.nativeElement;
    const prevColors: string[] = [];

    this.intervalId = setInterval(() => {
      let startColor = this.getRandomColor();
      let endColor = this.getRandomColor();

      while (prevColors.includes(startColor) || prevColors.includes(endColor)) {
        startColor = this.getRandomColor();
        endColor = this.getRandomColor();
      }

      gradient.style.transition = 'background 60s';
      gradient.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;

      prevColors.push(startColor, endColor);

    }, 60000);
  }

  getRandomColor(): string {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    while (color.length < 6) {
      color = '0' + color;
    }
    return `#${color}`;
  }
}
