import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { TiltDirective } from '../../shared/directives/tilt.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollRevealDirective, TiltDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  readonly loading = signal(false);
  readonly submitted = signal<'success' | 'validation_error' | null>(null);
  readonly copied = signal(false);

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  constructor() {
    this.form.valueChanges.subscribe(() => {
      if (this.submitted() === 'validation_error') {
        this.submitted.set(null);
      }
    });
  }

  copyEmail(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText('harshturakhia2002@gmail.com').then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2400);
    }).catch(() => {});
  }

  onSubmit(): void {
    if (this.loading()) {
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitted.set('validation_error');
      return;
    }

    this.submitted.set(null);
    this.loading.set(true);

    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set('success');
      this.form.reset();
    }, 1000);
  }
}
