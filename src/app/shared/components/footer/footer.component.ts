import { Component, inject } from "@angular/core";
import { PortfolioDataService } from "../../../core/services/portfolio-data.service";

@Component({
  selector: "app-footer",
  standalone: true,
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  private readonly data = inject(PortfolioDataService);
  readonly socials = this.data.socials;
  readonly currentYear = new Date().getFullYear();
}
