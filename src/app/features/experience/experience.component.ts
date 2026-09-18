import { Component, inject, computed } from "@angular/core";
import { PortfolioDataService } from "../../core/services/portfolio-data.service";
import { ScrollRevealDirective } from "../../shared/directives/scroll-reveal.directive";
import { TiltDirective } from "../../shared/directives/tilt.directive";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [ScrollRevealDirective, TiltDirective],
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.css",
})
export class ExperienceComponent {
  private readonly data = inject(PortfolioDataService);
  readonly experiences = computed(() => this.data.experiences());
}
