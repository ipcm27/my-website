import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showInfo() {}
}
