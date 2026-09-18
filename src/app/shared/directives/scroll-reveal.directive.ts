import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from "@angular/core";

@Directive({
  selector: "[revealOnScroll]",
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealDirection: "up" | "down" | "left" | "right" = "up";

  private readonly el = inject(ElementRef);
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    const el = this.el.nativeElement as HTMLElement;
    el.style.opacity = "0";
    el.style.transform = this._getTransform();
    el.style.transition = `opacity 0.7s ease ${this.revealDelay}ms, transform 0.7s ease ${this.revealDelay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0)";
          this.observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private _getTransform(): string {
    switch (this.revealDirection) {
      case "up":    return "translateY(40px)";
      case "down":  return "translateY(-40px)";
      case "left":  return "translateX(-40px)";
      case "right": return "translateX(40px)";
    }
  }
}
