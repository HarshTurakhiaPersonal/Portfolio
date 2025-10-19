import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { project } from 'src/app/modules/data-model/data.module';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  @Input() projectsData!: project[];
  categories: string[] = [];
  projects: project[] = [];
  category!: string;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.projects = [...this.projectsData].sort((a, b) => a.order - b.order) as project[];
    this.categories = [
      ...Array.from(new Set(this.projects.map((s) => s.category))),
    ];
  }
}
