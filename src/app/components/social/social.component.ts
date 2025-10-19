import { Component, Input } from '@angular/core';
import { social } from 'src/app/modules/data-model/data.module';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent {
  @Input() social: social[] = [];
}
