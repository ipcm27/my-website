import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  standalone: true,
  imports: [ CommonModule ],
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  @Input()
  cardIndex!: number;
}
