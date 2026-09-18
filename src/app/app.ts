import { Component, inject, OnInit } from "@angular/core";
import { ThemeService } from "./core/services/theme.service";
import { PortfolioDataService } from "./core/services/portfolio-data.service";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeroComponent } from "./features/hero/hero.component";
import { AboutComponent } from "./features/about/about.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { ExperienceComponent } from "./features/experience/experience.component";
import { ContactComponent } from "./features/contact/contact.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class AppComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  readonly portfolioData = inject(PortfolioDataService);

  ngOnInit(): void {
    // Theme is initialized in the ThemeService constructor via effect()
  }
}
