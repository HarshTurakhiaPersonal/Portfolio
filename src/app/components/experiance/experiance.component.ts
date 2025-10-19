import { Component, Input } from '@angular/core';
import { education, experience } from 'src/app/modules/data-model/data.module';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css'],
})
export class ExperianceComponent {
  @Input() experiance: experience[] = [];
  @Input() education: education[] = [];
  show :string = 'Experience';
  viewAll = true;
  experiences: experience[] = [];
  educations: education[] = [];

  constructor() {}

  ngOnInit(): void {
    this.experiences = [...this.experiance].reverse() as experience[];
    this.educations = [...this.education].reverse() as education[];
  }

  setShow(tab: string) {
    this.show = tab;
    this.viewAll = true;
  }

  setViewAll(viewAll: boolean) {
    this.viewAll = true;
  }
}
