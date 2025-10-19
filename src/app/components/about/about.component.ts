import { Component, Input } from '@angular/core';
import { about } from 'src/app/modules/data-model/data.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() about!: about;
  @Input() name: string = '';
}
