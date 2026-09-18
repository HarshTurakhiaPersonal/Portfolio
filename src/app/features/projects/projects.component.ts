import { Component, inject, computed } from "@angular/core";
import { PortfolioDataService } from "../../core/services/portfolio-data.service";
import { ScrollRevealDirective } from "../../shared/directives/scroll-reveal.directive";
import { TiltDirective } from "../../shared/directives/tilt.directive";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [ScrollRevealDirective, TiltDirective],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.css",
})
export class ProjectsComponent {
  private readonly data = inject(PortfolioDataService);
  readonly projects = computed(() =>
    [...this.data.projects()].sort((a, b) => a.order - b.order)
  );
}
