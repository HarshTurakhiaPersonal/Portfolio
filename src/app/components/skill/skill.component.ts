import { Component, Input } from '@angular/core';
import { skill } from 'src/app/modules/data-model/data.module';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  @Input() skillData: skill[] = [];

  categories: string[] = [];
  category: string = '';

  ngOnInit() {
    this.categories = Array.from(
      new Set(this.skillData.map((s) => s.category))
    );
    this.category = this.categories[0];
  }

  setCategory(c: string) {
    this.category = c;
  }

  get filteredSkills() {
    return this.skillData.filter(
      (s) => s.category.toLowerCase() === this.category.toLowerCase()
    );
  }
}
