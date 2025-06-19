import { Component } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private cvService: CvService) {}

  downloadCV() {
    this.cvService.downloadCV();
  }
}
