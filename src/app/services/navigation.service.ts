import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private scrollSubject = new Subject<void>();

  scroll$ = this.scrollSubject.asObservable();

  constructor() { }

  scrollToSkills() {
    this.scrollSubject.next();
  }
}
