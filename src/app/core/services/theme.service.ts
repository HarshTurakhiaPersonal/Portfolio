import { Injectable, signal, effect } from "@angular/core";

export type Theme = "dark" | "light";

@Injectable({ providedIn: "root" })
export class ThemeService {
  readonly theme = signal<Theme>(this._loadTheme());

  constructor() {
    effect(() => {
      const t = this.theme();
      document.documentElement.setAttribute("data-theme", t);
      localStorage.setItem("ht_theme", t);
    });
  }

  toggle(): void {
    this.theme.update(t => (t === "dark" ? "light" : "dark"));
  }

  private _loadTheme(): Theme {
    const stored = localStorage.getItem("ht_theme") as Theme | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
}
