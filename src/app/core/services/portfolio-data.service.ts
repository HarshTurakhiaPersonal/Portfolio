import { Injectable, inject, signal, computed } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { toSignal } from "@angular/core/rxjs-interop";
import { PortfolioData } from "../models/portfolio.model";

@Injectable({ providedIn: "root" })
export class PortfolioDataService {
  private readonly http = inject(HttpClient);

  readonly data = toSignal(
    this.http.get<PortfolioData>("/assets/data/data.json"),
    { initialValue: null }
  );

  readonly main = computed(() => this.data()?.main);
  readonly about = computed(() => this.data()?.about);
  readonly socials = computed(() => this.data()?.socials ?? []);
  readonly skills = computed(() => this.data()?.skills ?? []);
  readonly projects = computed(() => this.data()?.projects ?? []);
  readonly experiences = computed(() => this.data()?.experiences ?? []);
  readonly educations = computed(() => this.data()?.educations ?? []);
}
