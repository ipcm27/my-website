import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class GradientComponent {
  @ViewChild('gradient', { static: true })
  gradientRef!: ElementRef;
  dance: boolean = true;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    // this.gradientDance();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.dance = false;
  }

  gradientDance(): void {
    const gradient = this.gradientRef.nativeElement;
    const prevColors:any[] = [];

    this.intervalId = setInterval(() => {
      let startColor = Math.floor(Math.random() * 16777215).toString(16);
      let endColor = Math.floor(Math.random() * 16777215).toString(16);

      while (prevColors.includes(startColor) || prevColors.includes(endColor)) {
        startColor = Math.floor(Math.random() * 16777215).toString(16);
        endColor = Math.floor(Math.random() * 16777215).toString(16);
      }

      gradient.style.transition = 'background 5s';
      gradient.style.background = `linear-gradient(to right, #${startColor}, #${endColor})`;

      prevColors.push(startColor, endColor);


      const prevHexColors = prevColors.map(color => `#${color}`);
      console.log(prevHexColors);
    }, 5000);
  }
}
