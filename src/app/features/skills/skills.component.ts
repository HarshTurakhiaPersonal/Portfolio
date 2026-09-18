import { Component, inject, signal, computed } from "@angular/core";
import { PortfolioDataService } from "../../core/services/portfolio-data.service";
import { ScrollRevealDirective } from "../../shared/directives/scroll-reveal.directive";
import { TiltDirective } from "../../shared/directives/tilt.directive";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [ScrollRevealDirective, TiltDirective],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.css",
})
export class SkillsComponent {
  private readonly data = inject(PortfolioDataService);
  readonly selectedCategory = signal<string | null>(null);

  readonly dataSkills = computed(() => this.data.skills());

  readonly categories = computed(() => {
    return [...new Set(this.dataSkills().map(s => s.category))];
  });

  readonly filteredSkills = computed(() => {
    const selected = this.selectedCategory();
    if (!selected) return this.dataSkills();
    return this.dataSkills().filter(s => s.category === selected);
  });

  getCountForCategory(category: string): number {
    return this.dataSkills().filter(s => s.category === category).length;
  }
}
