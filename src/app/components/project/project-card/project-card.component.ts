import { Component, Input } from '@angular/core';
import { project } from 'src/app/modules/data-model/data.module';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project!: project;

  inView = true;

  onIntersection(entries: IntersectionObserverEntry[] | any): void {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        this.inView = true;
      }
    });
  }

  cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, duration: 0.6, ease: 'easeInOut' },
  };

  constructor() {}

  ngOnInit() {}
}
