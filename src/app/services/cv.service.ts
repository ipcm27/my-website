import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor() {}

  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('href', 'assets/files/igor-Pierre-Miranda_CV.pdf');
    link.setAttribute('download', 'igor-Pierre-Miranda_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
