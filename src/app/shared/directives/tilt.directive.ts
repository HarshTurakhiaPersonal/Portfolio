import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  inject,
} from "@angular/core";

@Directive({
  selector: "[cardTilt]",
  standalone: true,
})
export class TiltDirective {
  @Input() tiltAmount = 6;
  @Input() enableTilt = false; // Default subtle or spotlight-focused for clean Linear aesthetic

  private readonly el = inject(ElementRef<HTMLElement>);

  @HostListener("mousemove", ["$event"])
  onMouseMove(e: MouseEvent): void {
    const card = this.el.nativeElement;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Set CSS custom properties for cursor spotlight illumination
    card.style.setProperty("--mouse-x", `${mouseX}px`);
    card.style.setProperty("--mouse-y", `${mouseY}px`);

    if (this.enableTilt) {
      const x = mouseX / rect.width - 0.5;
      const y = mouseY / rect.height - 0.5;
      card.style.transform = `
        perspective(1000px)
        rotateY(${x * this.tiltAmount}deg)
        rotateX(${-y * this.tiltAmount}deg)
        scale3d(1.01, 1.01, 1.01)
      `;
    }
  }

  @HostListener("mouseleave")
  onMouseLeave(): void {
    const card = this.el.nativeElement;
    if (this.enableTilt) {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    }
  }
}
