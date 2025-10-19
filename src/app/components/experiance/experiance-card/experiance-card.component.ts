import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experiance-card',
  templateUrl: './experiance-card.component.html',
  styleUrls: ['./experiance-card.component.css'],
})
export class ExperianceCardComponent {
  @Input() index: number = -1;
  @Input() company: string = '';
  @Input() position: string = '';
  @Input() desc: string[] = [];
  @Input() institute: string = '';
  @Input() degree: string = '';
  @Input() duration: string = '';

  get inView(): boolean {
    // Return true for now since we're not using the inView hook
    return true;
  }
}
