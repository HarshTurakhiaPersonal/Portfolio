import { Component, inject } from "@angular/core";
import { PortfolioDataService } from "../../core/services/portfolio-data.service";
import { ScrollRevealDirective } from "../../shared/directives/scroll-reveal.directive";
import { TiltDirective } from "../../shared/directives/tilt.directive";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [ScrollRevealDirective, TiltDirective],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  private readonly data = inject(PortfolioDataService);
  readonly about = this.data.about;
}
